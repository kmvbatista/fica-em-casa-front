import api from './api';
import { getUserData } from './sessionService';

export async function postAssistance(
  category,
  toggleLoader,
  toggleIsCardChecked,
) {
  const user = getUserData();
  const dataToSend = {
    userId: user.id,
    userName: user.name,
    userPhone: user.phone,
    category,
  };
  try {
    await api.post('assist', dataToSend);
    toggleIsCardChecked(category);
  } catch (error) {
    toggleLoader(category);
    alert('houve um erro ao se conectar com o servidor');
  }
}
