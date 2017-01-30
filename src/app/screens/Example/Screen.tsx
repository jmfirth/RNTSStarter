import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Home } from "../index";

export interface IExampleScreenState {
  loaded?: boolean;
}

export default class Screen extends Component<{}, IExampleScreenState> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Example page
        </Text>
        <Button onPress={() => Actions.pop()} title="Home screen" />
        <Text style={styles.instructions}>
          Lorem ipsum solor...
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
