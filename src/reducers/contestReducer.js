import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function contestReducer(state = initialState.contests,action){
  
  switch (action.type) {
    case actionTypes.FETCH_CONTESTS_BEGIN:
      return Object.assign({},
        state,
        {
          loading: true,
          error: null
        }
      );
    
    case actionTypes.FETCH_CONTESTS_SUCCESS:
      return Object.assign({},
        state,
        {
          items: action.payload.contests,
          loading: false,
          error: null
        }
      );
    
    case actionTypes.FETCH_CONTESTS_FAILURE:
      return Object.assign({},
        state,
        {
          loading: false,
          error: action.payload.error,
          items: []
        }
      );
    
    default:
      return state;
  }
};