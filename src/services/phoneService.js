import api from './api';

export function sendPhone(phone) {
  return api.post('/phone', { phone });
}

export function sendCode(phone, token) {
  return api.put('/phone/activate', { phone, token });
}
