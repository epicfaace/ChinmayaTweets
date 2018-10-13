const TweetsReducer=(state=[],action)=>{
  switch (action.type) {
    case 'ALL_TWEETS':
    return action.tweets;
    default:
    return 'empty';
  }
}

export default TweetsReducer
