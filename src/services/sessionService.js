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
  swal('Dados cadastrados com sucesso', '', 'success');
}

export async function loginUser(dataToSend) {
  try {
    const response = await api.post('/sessions', dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function sendForgotPwdToken(login) {
  await api.post('/password/forgot', { login });
}

export async function sendConfirmation(dataToSend) {
  await api.post('/password/reset', dataToSend);
}
