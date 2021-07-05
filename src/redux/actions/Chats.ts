import Axios from "axios";
import { ChatsBD } from "interfaces/chats";
import { AppDispatch } from "redux/store";

export const setChats = (item:ChatsBD) => ({
  type: "SET_CHATS",
  payload: item
});

export const fetchChats = () => (dispatch: AppDispatch) => {
  Axios.get(`${window.location.href}:3001/chats`)
  .then(({data}) =>
  dispatch(setChats(data)));
};
