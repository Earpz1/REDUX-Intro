export const SEARCH_JOBS = 'SEARCH_JOBS'

export const searchResults = (results) => {
  return {
    type: 'SEARCH_JOBS',
    payload: results,
  }
}

export const addToFavourites = (job) => {
  return {
    type: 'FAVOURITE_JOB',
    payload: job,
  }
}

export const deleteFromFavourites = (job) => {
  return {
    type: 'DELETE_FAVOURITE',
    payload: job,
  }
}

export const getSearchResults = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        'https://strive-benchmark.herokuapp.com/api/jobs?search=' +
          query +
          '&limit=20',
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch(searchResults(data))
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
