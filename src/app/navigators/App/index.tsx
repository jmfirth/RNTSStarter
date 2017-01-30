import React, { Component } from "react";
import {
  addNavigationHelpers,
  NavigationAction,
  NavigationDispatch,
  NavigationScreenProp,
  NavigationState,
  StackNavigator,
} from "react-navigation";
import { connect } from "react-redux";
import { combineReducers } from "redux";
import { IAppState } from "../../createStore";
import { appRouteConfigs, appRouterConfig } from "../../routes";

const AppNavigator = StackNavigator(appRouteConfigs, appRouterConfig);

interface INavigationProps extends NavigationScreenProp<NavigationState, any> {
  Navigation: {
    App: {
      nav: NavigationState;
    };
  };
}

class Navigation extends Component<INavigationProps, any> {
  public render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.Navigation.App.nav,
      })} />
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  Navigation: {
    App: state.Navigation.App,
  },
});

export default connect(mapStateToProps)(Navigation);

export const reducer = combineReducers({
  nav: (state: NavigationState, action: any) => (
    AppNavigator.router.getStateForAction(action, state)
  ),
});
