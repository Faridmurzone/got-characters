import axios from 'axios';

export const fetchChars = () => async dispatch => {
   var promise = await axios.get('https://api.got.show/api/characters/')
        .then(result => {
          return result.data
        })
        .catch(err => console.log(err))

    dispatch({
      type: 'FETCH_CHARS',
      payload: promise
    })
  }

