import axios from 'axios';

const API_KEY ='';
// put your api key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: API_KEY
  }
})