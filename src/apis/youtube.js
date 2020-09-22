import axios from 'axios';

const KEY = 'AIzaSyBpOTpvoZsugNJkHlJZ3sWrSmxE4sKZyrE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
