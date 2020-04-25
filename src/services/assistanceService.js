import api from './api';
import { getUserData } from './sessionService';

export async function postAssistance(category) {
  const user = getUserData();
  const dataToSend = {
    userId: user.id,
    userName: user.name,
    userPhone: user.phone,
    category,
  };
  await api.post('assist', dataToSend);
}

export async function deleteAssistance(id) {
  await api.delete(`assist/${id}`);
}
