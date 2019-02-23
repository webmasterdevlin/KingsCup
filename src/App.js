/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image } from "react-native";
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
  SwipeRow
} from "native-base";
import beer from "./assets/beermug.png";

class App extends Component {
  state = {
    isPlaying: false
  };

  handlePress = () => {
    console.warn("Working");
    this.props.navigation.navigate("cards");
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
                onPress={() => this.handlePress()}
                style={{
                  margin: 10,
                  borderColor: "#FF4081"
                }}
                rounded
                block
                bordered
              >
                <Text style={{ color: "#FF4081" }}>Continue</Text>
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
