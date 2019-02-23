/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Router from "./src/Router";

AppRegistry.registerComponent(appName, () => Router);
