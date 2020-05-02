import api from './api';

export function sendSignupToken(phone, email, hasNoEmail) {
  const login = hasNoEmail ? phone : email;
  return api.post('/signup', { login });
}

export function validateForgotPwdToken(token) {
  return api.post('/token-validation/reset-password', { token });
}

export async function sendForgotPwdToken(login) {
  await api.post('/password/forgot', { login });
}
