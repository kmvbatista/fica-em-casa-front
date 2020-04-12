import { getUserData } from './sessionService';
import api from './api';

export const postNecessity = async (category, items, closeModal) => {
  try {
    await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const user = getUserData();
      const dataToSend = {
        necessities: {
          category,
          items,
          status: 'available',
        },
        user: Object.assign(user, {
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
      };
      try {
        api.post('necessity', dataToSend).then((x) => {
          closeModal();
        });
      } catch (error) {
        alert('houve um erro ao se conectar com o servidor');
      }
    });
  } catch (error) {
    alert('houve um erro ao buscar a localização');
  }
};
