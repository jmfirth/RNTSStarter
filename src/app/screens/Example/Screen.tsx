import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationScreenComponent,
  NavigationScreenOptions,
  NavigationScreenProp,
} from "react-navigation";

export interface IExampleScreenState {
  loaded?: boolean;
}

export interface IExampleScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Screen extends Component<IExampleScreenProps, IExampleScreenState> {
  public static navigationOptions: NavigationScreenOptions = {
    header: () => ({  // ({ state, setParams })
      style: { backgroundColor: "red" },
      // title: "Another way",
    }),
    title: () => "Example", // ({ state })
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Example page
        </Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Go back" />
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
