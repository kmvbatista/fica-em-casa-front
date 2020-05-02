import api from './api';

export function sendToken(phone, email, hasNoEmail) {
  const login = hasNoEmail ? phone : email;
  return api.post('/signup', { login });
}

export function validateForgotPwdToken(token) {
  return api.put('/token-validation/reset-password', { token });
}

export async function sendForgotPwdToken(login) {
  await api.post('/password/forgot', { login });
}
