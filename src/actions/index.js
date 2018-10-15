import {SIGN_IN,SIGN_UP,ALL_TWEETS,SEARCH_TWEETS} from './actionTypes'
// import axios from 'axios';
import ajax from '../Utils/ajax';

export function signIn(username,password){
   return{
     type:SIGN_IN,
     username,
     password,
   };
}

export function signUp(username,password,email,phone_number){
   return{
     type:SIGN_UP,
     username,
     password,
     email,
     phone_number
   };
}

export async function tweets(tweets){
   const request=await ajax.fetchInitialTweets();
   return{
     type:ALL_TWEETS,
     tweets:request,
   };
}

export async function searchTweets(term){
   const request=await ajax.fetchTweetsSearchResults(term);
   return{
     type:SEARCH_TWEETS,
     tweets:request,
   };
}

// export function tweets(tweets){
//
//    const url='https://staging.chinmayamission.com/wp-json/wp/v2/tweet';
//    const request=axios.get(url)
//    return{
//      type:TWEETS,
//      tweets:request,
//    };
// }
