import { handleActions } from "redux-actions";
import { IHomeScreenState } from "./Screen";

const initialState: IHomeScreenState = {
  loaded: false,
};

export default handleActions({
  "Home/UPDATE_HOME": (state, action) => ({ ...state, ...action.payload }),
}, initialState);
