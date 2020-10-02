import * as actionTypes from './actionTypes';

export const loadAllUsers=(query)=>{
    return {
      type: actionTypes.LOAD_ALL_USERS,
      payload: query,
    };
  };
  
  export const loadUser=(query)=>{
    return {
      type: actionTypes.LOAD_USER,
      payload: query,
    };
  };