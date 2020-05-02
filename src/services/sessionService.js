import api from './api';
import swal from 'sweetalert';
import Loader from '../components/Loader';

export async function registerUser(dataToSend) {
  swal({
    title: 'Estamos fazendo seu cadastro...',
    content: Loader(),
    buttons: {},
  });
  const response = await api.post('/user', dataToSend);
  setLoggedToken(response.data.token);
  return response;
}

export async function loginUser(dataToSend) {
  try {
    const response = await api.post('/sessions', dataToSend);
    setLoggedToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function setLoggedToken(token) {
  window.localStorage.setItem('token', token);
}

export function getToken() {
  return window.localStorage.getItem('token');
}

export async function logoutUser() {
  window.localStorage.removeItem('token');
}
