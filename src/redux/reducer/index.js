const startingState = {
  mainSearchJobs: {
    content: [],
  },
  favouriteJobs: {
    content: [],
  },
}

const mainReducer = (state = startingState, action) => {
  switch (action.type) {
    case 'SEARCH_JOBS':
      return {
        ...state,
        mainSearchJobs: {
          ...state.mainSearchJobs,
          content: [...state.mainSearchJobs.content, action.payload],
        },
      }
    case 'FAVOURITE_JOB':
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: [...state.favouriteJobs.content, action.payload],
        },
      }

    case 'DELETE_FAVOURITE':
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: state.favouriteJobs.content.filter((book, i) => {
            return i !== action.payload
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
