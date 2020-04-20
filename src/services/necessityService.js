import api from './api';
import swal from 'sweetalert';

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
}

function failure(closeModal) {
  closeModal();
  swal('Houve um erro ao buscar a localização', 'Tente novamente!', 'error');
}
