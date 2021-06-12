const InitState = {
  items: [],
  isLoaded: false
}

const Messages = (state = InitState, action) => {
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