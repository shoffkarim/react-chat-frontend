import Axios from "axios";

export const setChats = (item) => ({
  type: "SET_CHATS",
  payload: item
});

export const fetchChats = (id) => (dispatch) => {
  Axios.get(`http://localhost:3001/chats`)
  .then(({data}) =>
  dispatch(setChats(data)));
};
