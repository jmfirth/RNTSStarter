import { handleActions } from "redux-actions";
import { IExampleScreenState } from "./Screen";

const initialState: IExampleScreenState = {
  loaded: false,
};

export default handleActions({
  "Example/UPDATE_EXAMPLE": (state, action) => ({ ...state, ...action.payload }),
}, initialState);
