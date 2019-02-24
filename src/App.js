/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, NetInfo, StyleSheet, Image } from "react-native";
import {
  Root,
  Container,
  Header,
  Footer,
  Content,
  View,
  Text,
  List,
  Form,
  Input,
  Item,
  ListItem,
  Button,
  H1,
  H2,
  H3,
  Icon,
  Title,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  SwipeRow,
  Toast
} from "native-base";
import beer from "./assets/beermug.png";

class App extends Component {
  state = {
    isPlaying: false,
    isConnected: true
  };

  handlePress = async () => {
    await this._handleNetInfoSubscribe();

    if (!this.state.isConnected) {
      Toast.show({
        text: "Please check your internet connectivity",
        buttonText: "Okay",
        position: "top"
      });

      this._handleNetInfoUnsubscribe();
      return;
    }
    this._handleNetInfoUnsubscribe();
    this.props.navigation.navigate("cards");
  };

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  _handleNetInfoSubscribe = async () => {
    await NetInfo.isConnected
      .fetch()
      .then(isConnected => this.setState({ isConnected }));
  };

  _handleNetInfoUnsubscribe = () => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  };

  render() {
    return (
      <Root>
        <Container>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <H1 style={{ fontFamily: "Palatino" }}>King's Cup</H1>
              <H3 style={{ marginTop: 20, fontFamily: "Palatino-Italic" }}>
                Beer Drinking Game
              </H3>
            </View>
            <View style={styles.beer}>
              <Image
                source={beer}
                style={{ height: 300, width: 300, resizeMode: "contain" }}
              />
            </View>
            <View style={styles.welcomeButtons}>
              <Button
                onPress={() => this.handlePress()}
                style={{ backgroundColor: "#3F51B5", margin: 10 }}
                rounded
                block
              >
                <Text>Shuffle</Text>
              </Button>
              <Button
                onPress={() => {
                  Toast.show({
                    text: "working on it",
                    buttonText: "Okay",
                    position: "top",
                    duration: 3000,
                    buttonTextStyle: { color: "#F44336" }
                  });
                }}
                style={{
                  margin: 10,
                  borderColor: "#FF4081"
                }}
                rounded
                block
                bordered
              >
                <Text style={{ color: "#FF4081" }}>
                  {this.state.isConnected.toString()}
                </Text>
              </Button>
            </View>
          </View>
        </Container>
      </Root>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  welcomeButtons: {
    justifyContent: "space-between"
  },
  beer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
