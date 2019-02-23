import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Footer,
  Content,
  View,
  Text,
  H1,
  H2,
  H3,
  List,
  Form,
  Input,
  Item,
  ListItem,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  SwipeRow
} from "native-base";
import { getDrawACard, getShuffleTheCards } from "./CardService";

class Cards extends Component {
  state = {
    tapped: false,
    deck: {
      remaining: null,
      success: false,
      deck_id: "",
      cards: [
        {
          value: "",
          images: {
            svg: "",
            png: ""
          },
          suit: "",
          image: "",
          code: ""
        }
      ]
    }
  };
  async componentDidMount(): void {
    const { data } = await getShuffleTheCards();
    this.setState({ deck: data });
    console.warn(this.state.deck);
  }

  handleTapToDraw = async () => {
    const { data } = await getDrawACard(this.state.deck.deck_id);
    console.warn(data);
    const { tapped } = this.state;
    this.setState({ tapped: !tapped });
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          {this.state.tapped ? (
            <H1 onPress={() => this.handleTapToDraw()}>Tapped! Thanks!</H1>
          ) : (
            <H1 onPress={() => this.handleTapToDraw()}>
              Tap to draw the 1st card!
            </H1>
          )}
        </View>
      </Container>
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});
