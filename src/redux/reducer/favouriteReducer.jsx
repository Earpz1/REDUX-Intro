import { addToFavourites, deleteFromFavourites } from '../actions'

const initialState = {
  content: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVOURITE_JOB':
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case 'DELETE_FAVOURITE':
      return {
        ...state,
        content: state.content.filter((book, i) => {
          return i !== action.payload
        }),
      }
    default:
      return state
  }
}
export default favouriteReducer
