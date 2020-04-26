import api from './api';

export function sendToken(phone, email, hasNoEmail) {
  const login = hasNoEmail ? phone : email;
  debugger;
  return api.post('/login/create', { login });
}

export function sendCode(phone, email, hasNoEmail, token) {
  const login = hasNoEmail ? phone : email;
  return api.put('/login/activate', { login, token });
}
