import api from './api';
import swal from 'sweetalert';

export async function updateNecessitiesStatus(categoriesToUpdate, status) {
  try {
    debugger;
    await api.put('/necessity', { categoriesToUpdate, status });
    swal('Ficamos felizes que deu tudo certo!', '', 'success');
  } catch (error) {
    swal(
      error.response
        ? error.response.data.error
        : 'Houve um erro na atualização',
      'Tentaremos perguntar novamente mais tarde!',
      'error',
    );
  }
}

export const postNecessity = (items, closeModal, setCardChecked) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => success(coords, closeModal, items, setCardChecked),
    (e) => failure(),
  );
};

function success(coords, closeModal, items, setCardChecked) {
  const dataToSend = {
    necessities: items,
    latitude: coords.latitude,
    longitude: coords.longitude,
  };
  api
    .post('necessity', dataToSend)
    .then((x) => {
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
}

function failure(closeModal) {
  closeModal();
  swal('Houve um erro ao buscar a localização', 'Tente novamente!', 'error');
}
