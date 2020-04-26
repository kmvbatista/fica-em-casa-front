import api from './api';
import swal from 'sweetalert';

export async function updateUserLocation(location) {
  try {
    await api.put('/user', {
      latitude: location.latitude,
      longitude: location.longitude,
    });
  } catch (error) {
    swal(
      'Houve um erro de comunicação com nossos servidores.',
      'Tente novamente!',
      'error',
    );
  }
}

export async function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      () =>
        reject(
          'Não conseguimos buscar sua localização atual. Verifique se a seu gps e seu navegador está configurado corretamente',
        ),
    );
  });
}
