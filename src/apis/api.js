import axios from 'axios';

const apiRequest = () => {
  axios.get('https://api.got.show/api/characters/')
    .then(result => {
      console.log("from api", result.data)
      return result.data
    })
    .catch(err => console.log(err))
}

export default apiRequest;