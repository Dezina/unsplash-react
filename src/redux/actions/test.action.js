import {
    DISPLAY_FAQS,
    DISPLAY_COLLECTIONS,
    SEARCH_COLLECTION
} from '../../config/actionTypes';
import axios from 'axios'

const URL1 = `https://api.unsplash.com`

//get faq's
export const getFaqs = () => async (dispatch) => {
    try {
          await axios({
                method: 'GET',
                url: `${URL1}/photos/?client_id=70k60UjDeQcxIiZDswNPRfjnNksD-3gA90AQX-y_hSM`
          }).then(res => {
               
                dispatch({type: DISPLAY_FAQS, payload: res.data });
          }).catch(err => {
                console.log(err)
          })
      }catch (error) {
          console.log(error);
          dispatch({type: DISPLAY_FAQS});
      }
};

//get collections
export const getCollections = () => async (dispatch) => {
      try {
            await axios({
                  method: 'GET',
                  url: `${URL1}/collections/?client_id=70k60UjDeQcxIiZDswNPRfjnNksD-3gA90AQX-y_hSM`
            }).then(res => {
                  let newArray = []
                  res?.data.map((item) => {
                  newArray.push({
                        id: item.id,
                        value: item.title,
                        title: item.title
                  })
                  return newArray;
                })
               
            dispatch({type: DISPLAY_COLLECTIONS, payload: newArray });
            }).catch(err => {
                  console.log(err)
            })
        }catch (error) {
            console.log(error);
            dispatch({type: DISPLAY_COLLECTIONS});
        }
  };

  //search collection
export const searchCollection = (id) => async (dispatch) => {
      try {
            await axios({
                  method: 'GET',
                  url: `${URL1}/collections/${id}/?client_id=70k60UjDeQcxIiZDswNPRfjnNksD-3gA90AQX-y_hSM`
            }).then(res => {
           
               let newArray = []
               newArray.push(res.data)
             
            dispatch({type: SEARCH_COLLECTION, payload: newArray });

            }).catch(err => {
                  console.log(err)
            })
        }catch (error) {
            console.log(error);
        }
  };