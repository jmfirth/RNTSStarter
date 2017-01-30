import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { ActionConst, Modal, Router, Scene} from "react-native-router-flux";
import { connect, Provider } from "react-redux";
import { persistStore } from "redux-persist";
import createStore from "./createStore";
import { Example, Home } from "./screens/index";

const store = createStore();

const persistor = (async () => persistStore(store, { storage: AsyncStorage }))();

const RouterWithRedux = connect()(Router);

const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="app" hideNavBar={false}>
        <Scene
          key={Home.NAME}
          component={Home.Screen}
          title={Home.NAME}
          type={ActionConst.REPLACE}
          initial
        />
        <Scene
          key={Example.NAME}
          component={Example.Screen}
          title={Example.NAME}
          type={ActionConst.PUSH}
        />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default App;
