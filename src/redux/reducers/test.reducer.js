import {
    DISPLAY_FAQS,
    DISPLAY_COLLECTIONS,
    SEARCH_COLLECTION
} from '../../config/actionTypes';

const initialState = {
    faqs : [],
    collections: [],
    collection: []
}

export const testReducer = (state = initialState, {type, payload}) => {
  switch (type) {
                  
    case DISPLAY_FAQS:
          return {
                ...state,
                faqs: payload
          }
    case DISPLAY_COLLECTIONS:
        return {
            ...state,
            collections: payload
        }
    case SEARCH_COLLECTION: 
        return {
            ...state,
            collection: payload
        }
       
    default:
          return state
     }
   
   }