import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { autoRehydrate } from "redux-persist";
import thunk from "redux-thunk";
import { Example, Home, IExampleScreenState, IHomeScreenState } from "./screens/index";

export interface IAppState {
  Screens: {
    Example: IExampleScreenState;
    Home: IHomeScreenState;
  };
}

const middleware = compose(applyMiddleware(thunk) , autoRehydrate());

export default () => {
  const rootReducer = combineReducers({
    Modules: combineReducers({
      Example: Example.reducer,
      Home: Home.reducer,
    }),
  });

  return createStore(rootReducer, undefined, middleware);
};
