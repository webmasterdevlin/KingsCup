import { BaseUrl } from "../utils/constants";
import http from "../utils/axios-converter";

export async function getShuffleTheCards() {
  return await http.get(`${BaseUrl.DeckOfCards}/new/shuffle`);
}

export async function getDrawACard(deck_id) {
  return await http.get(`${BaseUrl.DeckOfCards}/${deck_id}/draw/?count=52`);
}

export async function getReshuffleTheCards(deck_id) {
  return await http.get(`${BaseUrl.DeckOfCards}/${deck_id}/shuffle`);
}
