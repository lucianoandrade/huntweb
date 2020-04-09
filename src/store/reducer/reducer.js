const INITIAL_STATE = {
  page: 0 
}

export default function whichPage(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}