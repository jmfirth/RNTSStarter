import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import createStore from "./createStore";
import AppNavigation from "./navigators/App/index";

const store = createStore();

const persistor = (async () => persistStore(store, { storage: AsyncStorage }))();

export default class App extends Component<void, void> {
  public render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
