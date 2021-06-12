import Axios from "axios";

export const setMessages = (item) => ({
  type: "SET_MESSAGES",
  payload: item
});

export const fetchMessages = (id) => (dispatch) => {
  Axios.get(`http://localhost:3001/messages`)
  .then(({data}) =>
  dispatch(setMessages(data)));
};
