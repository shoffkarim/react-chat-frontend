import { AnyAction } from "redux";

const InitState = {
  items: [],
  isLoaded: false
}

const Chats = (state = InitState, action: AnyAction) => {
  switch(action.type){
    case "SET_CHATS" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Chats;