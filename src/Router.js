import { createAppContainer, createStackNavigator } from "react-navigation";
import App from "./App";
import Cards from "./Card/Cards";

const MainNavigator = createStackNavigator({
  app: {
    screen: App,
    navigationOptions: () => ({
      header: null
    })
  },
  cards: {
    screen: Cards,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: false
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
