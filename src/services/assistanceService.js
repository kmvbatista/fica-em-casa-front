import api from './api';

export async function postAssistance(category) {
  const response = await api.post('assist', { category });
  return response.data;
}

export async function deleteAssistance(id) {
  await api.delete(`assist/${id}`);
}
