import api from './api';

export function sendToken(loginMethod) {
  return api.post('/login', { loginMethod });
}

export function sendCode(phone, token) {
  return api.put('/phone/activate', { phone, token });
}
