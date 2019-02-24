import React, { Component } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Container,
  DeckSwiper,
  Footer,
  FooterTab,
  H1,
  H2,
  Icon,
  Text,
  View,
  Root,
  Toast
} from "native-base";
import { getDrawACard, getShuffleTheCards } from "./CardService";
import getRule from "../utils/RuleGenerator";

class Cards extends Component {
  state = {
    cardTracker: 0,
    tapped: false,
    rule: "",
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
    await this.handleTapToDraw();
    this._getCardRule();
  }

  handleTapToDraw = async () => {
    const { data } = await getDrawACard(this.state.deck.deck_id);
    this.setState({ deck: data });
    // const { tapped } = this.state;
    // this.setState({ tapped: true });
  };

  handleOnSwipe = () => {
    // const currentDeck = { ...this.state.deck };
    // currentDeck.cards = this.state.deck.cards.slice(1);
    // this.setState({ deck: currentDeck });
    const count = this.state.cardTracker + 1;
    this.setState({ cardTracker: count });
    this.handleViewRule();
  };

  handleViewRule = () => {
    this._getCardRule();
    this._showRule();
  };

  _getCardRule = () => {
    const track = this.state.deck.cards[this.state.cardTracker].code;
    const rule = getRule(track);
    this.setState({ rule });
  };

  _showRule = () => {
    Toast.show({
      text: this.state.rule,
      buttonText: "Okay",
      duration: 10000,
      buttonTextStyle: { color: "#FF4081" }
    });
  };

  render() {
    const { tapped, deck } = this.state;
    return (
      <Root>
        <Container>
          {tapped ? (
            <View
              style={{
                marginTop: 30,
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <DeckSwiper
                onSwipeLeft={() => this.handleOnSwipe()}
                onSwipeRight={() => this.handleOnSwipe()}
                dataSource={deck.cards}
                style={styles.container}
                renderEmpty={() => (
                  <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "#F44336" }}>No More</Text>
                  </View>
                )}
                renderItem={item => (
                  <Card style={{ elevation: 3 }}>
                    <CardItem cardBody>
                      <Image
                        style={{ height: 600, flex: 1 }}
                        source={{
                          uri: `https://deckofcardsapi.com/static/img/${
                            item.code
                          }.png`
                        }}
                      />
                    </CardItem>
                  </Card>
                )}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <H1
                style={{ color: "#F44336" }}
                onPress={() => this.setState({ tapped: true })}
              >
                Tap to draw the 1st card!
              </H1>
            </View>
          )}

          {tapped && (
            <Footer style={styles.footer}>
              <FooterTab>
                <Button vertical>
                  <Icon style={{ color: "#FF4081" }} name="home" />
                  <Text>Home</Text>
                </Button>
                <Button vertical onPress={() => this.handleViewRule()}>
                  <Icon style={{ color: "#FF4081" }} name="paper" />
                  <Text>Rules</Text>
                </Button>
                <Button vertical>
                  <Icon style={{ color: "#FF4081" }} name="shuffle" />
                  <Text>Reshuffle</Text>
                </Button>
              </FooterTab>
            </Footer>
          )}
        </Container>
      </Root>
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
  },
  footer: {
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});
