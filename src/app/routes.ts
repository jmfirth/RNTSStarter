import {
  NavigationRouteConfigMap,
  NavigationScreenRouteConfig,
  NavigationStackRouterConfig,
  StackNavigator,
} from "react-navigation";
import { Example, Home } from "./screens";

export const appRouteConfigs: NavigationRouteConfigMap = {
  [Example.NAME]: {
    getScreen: () => Example.Screen,
    path: "/",
  },
  [Home.NAME]: {
    getScreen: () => Home.Screen,
    path: "/",
  },
};

export const appRouterConfig: NavigationStackRouterConfig = {
  initialRouteName: Home.NAME,
};

export const appRoutes = StackNavigator(appRouteConfigs, appRouterConfig);
