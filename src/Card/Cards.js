import React, { Component } from "react";
import { StyleSheet, Image, NetInfo, ScrollView } from "react-native";
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
  Badge,
  List,
  Form,
  Input,
  Item,
  ListItem,
  Button,
  Icon,
  Toast,
  Thumbnail,
  Title,
  Card,
  CardItem,
  DeckSwiper,
  Body,
  Left,
  Right,
  FooterTab,
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
    await this.handleTapToDraw();
  }

  handleTapToDraw = async () => {
    const { data } = await getDrawACard(this.state.deck.deck_id);
    this.setState({ deck: data });
    // const { tapped } = this.state;
    // this.setState({ tapped: true });
  };

  render() {
    const { tapped } = this.state;
    return (
      <Container>
        {tapped ? (
          <View
            style={{ marginTop: 30, flex: 1, justifyContent: "space-between" }}
          >
            <DeckSwiper
              dataSource={this.state.deck.cards}
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
            <H1 onPress={() => this.setState({ tapped: true })}>
              Tap to draw the 1st card!
            </H1>
          </View>
        )}
        <View style={{ marginLeft: 20, marginRight: 20, flex: 0.25 }}>
          <ScrollView>
            <H2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              blanditiis consectetur dolores doloribus et fugiat, illum ipsa
              ipsam iure iusto molestiae molestias natus neque numquam odio
              officiis provident quam sed. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aut blanditiis consectetur dolores
              doloribus et fugiat, illum ipsa ipsam iure iusto molestiae
              molestias natus neque numquam odio officiis provident quam sed.
            </H2>
          </ScrollView>
        </View>
        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="shuffle" />
              <Text>Reshuffle</Text>
            </Button>
          </FooterTab>
        </Footer>
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
  },
  footer: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});
