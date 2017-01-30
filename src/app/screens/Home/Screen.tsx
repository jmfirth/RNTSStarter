import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationScreenComponent,
  NavigationScreenOptions,
  NavigationScreenProp,
} from "react-navigation";

export interface IHomeScreenState {
  loaded?: boolean;
}

interface IScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Screen extends Component<IScreenProps, IHomeScreenState> {
  public static navigationOptions: NavigationScreenOptions = {
    // ({ state, setParams }): HeaderConfig;
    header: () => ({
      // title: "Hey there!",
    }),
    // ({ state }) => string;
    title: () => "Hello world!",
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/app/screens/Home/Screen.tsx.
        </Text>
        <Button onPress={() => this.props.navigation.navigate("Example")} title="Example Screen" />
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
