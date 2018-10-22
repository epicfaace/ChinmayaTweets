const initialState = {
  searchtweets: null,
}

const SearchReducer=(state=initialState,action)=>{
  switch (action.type) {
    case 'SEARCH_TWEETS':
    console.log(action.tweets);
    return {
      ...state,
      searchtweets: action.tweets,
    }

    default:
    return state;
  }
}

export default SearchReducer
