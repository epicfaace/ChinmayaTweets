const SearchReducer=(state=[],action)=>{
  switch (action.type) {
    case 'SEARCH_TWEETS':
    return action.tweets;
    default:
    return 'empty';
  }
}

export default SearchReducer
