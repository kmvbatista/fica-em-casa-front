import api from './api';

export function getUserData() {
  try {
    const { user } = JSON.parse(document.cookie);
    return user;
  } catch (error) {
    console.log('não foi possível encontrar usuário logado');
    return undefined;
  }
}

export function setCookies(responseData) {
  try {
    const expiryDate = new Date('12/12/2023');
    const { user, token } = responseData;
    document.cookie = `{"user": ${JSON.stringify(
      user,
    )}, "token": ${JSON.stringify(token)} }; expires=${expiryDate}`;
  } catch (error) {
    console.log('Houve um erro ao setar os cookies');
  }
}

export async function registerUser(dataToSend) {
  const response = await api.post('user', dataToSend);
  setCookies(response.data);
}
