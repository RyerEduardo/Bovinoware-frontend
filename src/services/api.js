import axios from 'axios';

const api = axios.create({
  baseURL: 'http://bovinoserver.herokuapp.com/api' //ja ta on no heroku
});

export default api;
//para local host muda o IP 'http://192.168.0.105:3002/api'

//para servidor na nuvem 'http://bovinoserver.herokuapp.com/api'