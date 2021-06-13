import { combineReducers } from "redux";
import Chats from "./Chats";
import Messages from "./Messages";


const rootReducer = combineReducers({
  Chats: Chats,
  Messages: Messages
});

export default rootReducer;