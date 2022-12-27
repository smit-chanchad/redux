import { createStore } from "redux";
import modelReducers from "../reducers/modelReducers";

export default createStore(modelReducers);

export { saveName, deleteName } from "../actions/modelActionCreators"