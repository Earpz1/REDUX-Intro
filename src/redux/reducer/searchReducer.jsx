import { searchResults } from '../actions'

const initialState = {
  jobs: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_JOBS':
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      }

    default:
      return state
  }
}
export default searchReducer
