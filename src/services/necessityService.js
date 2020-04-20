import { getUserData } from './sessionService';
import api from './api';
import swal from 'sweetalert';

export const postNecessity = async (
  category,
  items,
  closeModal,
  setCardChecked,
) => {
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
      api
        .post('necessity', dataToSend)
        .then((x) => {
          debugger;
          closeModal();
          setCardChecked();
          swal(
            'Necessidade cadastrada com sucesso!',
            'Esperamos que dê tudo certo!',
            'success',
          );
        })
        .catch((x) => {
          closeModal();
          swal('Houve um erro no cadastro!', 'Tente novamente!', 'error');
        });
    });
  } catch (error) {
    alert('houve um erro ao buscar a localização');
  }
};
