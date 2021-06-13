import { AnyAction } from "redux";
const InitState = {
  items: [],
  isLoaded: false
}

const Messages = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case "SET_MESSAGES" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Messages;