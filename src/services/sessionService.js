import api from './api';
import swal from 'sweetalert';
import Loader from '../components/Loader';

export function getUserData() {
  try {
    const { user } = JSON.parse(document.cookie);
    return user;
  } catch (error) {
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

export function updateUserCookies(user) {
  try {
    const expiryDate = new Date('12/12/2023');
    const { token } = JSON.parse(document.cookie);
    document.cookie = `{"user": ${JSON.stringify(
      user,
    )}, "token": ${JSON.stringify(token)} }; expires=${expiryDate}`;
  } catch (error) {
    console.log('Houve um erro ao setar os cookies');
  }
}

export async function registerUser(dataToSend) {
  swal({
    title: 'Estamos fazendo seu cadastro...',
    content: Loader(),
    buttons: {},
  });
  const response = await api.post('/user', dataToSend);
  setCookies(response.data);
  swal('Dados cadastrados com sucesso', '', 'success');
}

export async function loginUser(dataToSend) {
  try {
    const response = await api.post('/sessions', dataToSend);
    setCookies(response.data);
  } catch (error) {
    throw error;
  }
}
