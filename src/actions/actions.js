export const ADD_ITEM = "ADD_ITEM" 
export const REMOVE_ITEM = "REMOVE_ITEM" 

export const addFeature = item => {
    return {type: ADD_ITEM, payload:item.id}
 };

export const removeFeature = item => {
    return {type: REMOVE_ITEM, payload:item.id}
  };


// export const addFeature = (newFeature) => dispatch => {
//     dispatch({type: ADD_ITEM, payload: newFeature})
// }

// export const removeFeature = (feature) => dispatch => {
//     dispatch({type: REMOVE_ITEM, payload: feature.id})
// }

 