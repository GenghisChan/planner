import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.floor((Math.random() * 100) + 1),
          name: action.placeName,
          image: {
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        })
      };

    default:
      return state;
  }
};

export default reducer;
