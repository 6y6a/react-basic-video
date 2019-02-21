import axios from 'axios'

const KEY = 'AIzaSyCpPVqag9ZAA0vSTr8Uv-tqyH56-RF4ETo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
