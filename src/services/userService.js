import api from './api';
import { logoutUser } from './sessionService';

export async function getAssistCategories() {
  try {
    const response = await api.get('/assist/user/assists');
    return response.data;
  } catch (error) {
    if (error.response.data.error) {
    }
  }
}

export async function getPendingNecesseties() {
  const response = await api.get('/necessity/status/pending');
  return response.data;
}

export async function deleteAccount() {
  const response = await api.delete('/user');
  logoutUser();
  return response.data;
}

export async function updateUser(dataToSend) {
  const response = await api.put('/user', dataToSend);
  return response.data;
}

export async function getUserData() {
  const response = await api.get('/user');
  return response.data;
}

export async function resetPassword(dataToSend) {
  const response = await api.post('/password/reset', dataToSend);
  return response.data;
}
