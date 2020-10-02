import * as actionTypes from './actionTypes';

const initialState = {};

export default function userProfileReducer(state=initialState, action) {
    switch (action.type) {
      case actionTypes.LOAD_ALL_USERS:
        return {...state, loading: true};
      case actionTypes.LOAD_ALL_USERS_COMPLETE:
        return {...state, loading: false, usersList: action.payload};
      case actionTypes.LOAD_ALL_USERS_ERROR:
        return {...state, loading: false, usersList: undefined};
  
      case actionTypes.LOAD_USER:
        return {...state, loading: true};
      case actionTypes.LOAD_USER_COMPLETE:
        return {...state, loading: false, userDetails: action.payload};
      case actionTypes.LOAD_USER_ERROR:
        return {...state, loading: false, userDetails: undefined}; 

      // case actionTypes.LOAD_USER:
      //   return {...state, loading: true};
      // case actionTypes.LOAD_USER_COMPLETE:
      //   return {...state, loading: false, userDetails: action.payload};
      // case actionTypes.LOAD_USER_ERROR:
      //   return {...state, loading: false, userDetails: undefined}; 
  
      default:
        return state;
    }
  }