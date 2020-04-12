import axios from 'axios';

// return AsyncStorage.getItem('@BatteryCollector:token').then( token => {
//   const instance = axios.create({baseURL:'https://turnitgreenerapiback.azurewebsites.net',
//   headers: {
//       'Content-Type': 'application/json',
//   }});
//   instance.interceptors.request.use(function (config) {
//       const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMyIsImV4cCI6MTU2OTg3NzczNCwiaXNzIjoia2VubmVkeUJhdHRlcnlQcm9qZWN0IiwiYXVkIjoiQmF0dGVyeUNvbGxlY3RvclVzZXJzIn0.dkwQN3KBLmYqWubSS0huafj8RAq5lCWFARD_JCP-Kkw'
//       config.headers.Authorization =  token ? `Bearer ${token}` : '';
//       return config;
//   });
//   return instance;

const instance = axios.create({
  baseURL: 'https://ficaemcasa-backend.herokuapp.com/',
});

instance.interceptors.request.use(function (config) {
  if (document.cookie) {
    try {
      const { token } = JSON.parse(document.cookie);
      alert(token);
      console.log(token);
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    } catch (error) {
      return config;
    }
  }
  return config;
});

export default instance;
