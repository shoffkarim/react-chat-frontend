import { AppDispatch } from './../store';
import Axios from "axios";
import { MessageBD } from 'interfaces/message';

export const setMessages = (item:MessageBD) => ({
  type: "SET_MESSAGES",
  payload: item
});

export const fetchMessages = (id:number) => (dispatch: AppDispatch) => {
  Axios.get(`${window.location.protocol}//${window.location.hostname}:3001/messages?chat_id=${id}`)
  .then(({data}) =>
  dispatch(setMessages(data)));
};
