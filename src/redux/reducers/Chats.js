const InitState = {
  items: [],
  isLoaded: false
}

const Chats = (state = InitState, action) => {
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