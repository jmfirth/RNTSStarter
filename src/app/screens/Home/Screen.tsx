import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Example } from "../index";

export interface IHomeScreenState {
  loaded?: boolean;
}

export default class Screen extends Component<{}, IHomeScreenState> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/app/screens/Home/Screen.tsx.
        </Text>
        <Button onPress={Actions[Example.NAME]} title="Example screen" />
        <Text style={styles.instructions}>
          Press Cmd+R/r-r to reload, {"\n"}
          Cmd+D/M or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  } as React.ViewStyle,

  helloworld: {
    marginVertical: 15,
  } as React.ViewStyle,

  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  } as React.TextStyle,

  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  } as React.TextStyle,
});
