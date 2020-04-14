import api from './api';
import { getUserData } from './sessionService';

export const postAssistance = async (
  category,
  toggleLoader,
  toggleIsCardChecked,
) => {
  return navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const user = getUserData();
      const dataToSend = {
        userId: user.id,
        userName: user.name,
        userPhone: user.phone,
        latitude: coords.latitude,
        longitude: coords.longitude,
        category,
      };
      try {
        await api.post('assist', dataToSend);
        toggleIsCardChecked(category);
      } catch (error) {
        toggleLoader(category);
        alert('houve um erro ao se conectar com o servidor');
      }
    },
    () => {
      toggleLoader(category);
      alert('não foi possível obter sua localização');
    },
  );
};
