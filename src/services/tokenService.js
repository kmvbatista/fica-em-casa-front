import api from './api';

export function sendToken(phone, email, hasNoEmail) {
  const login = hasNoEmail ? phone : email;
  return api.post('/signup', { login });
}

export function sendCode(phone, email, hasNoEmail, token) {
  const login = hasNoEmail ? phone : email;
  return api.put('/token-validation/signup', { login, token });
}
