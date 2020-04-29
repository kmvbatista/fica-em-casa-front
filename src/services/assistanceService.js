import api from './api';

export async function postAssistance(category) {
  await api.post('assist', { category });
}

export async function deleteAssistance(id) {
  await api.delete(`assist/${id}`);
}
