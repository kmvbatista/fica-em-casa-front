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

async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      () =>
        reject(
          'Não conseguimos buscar sua localização atual. Verifique se seu gps e seu navegador está configurado corretamente',
        ),
    );
  });
}

export async function getUserLocation() {
  await swal(
    'Precisamos da sua localização para buscar amigos próximos',
    'Sem a localização, infelizmente o app não irá funcionar corretamente',
    'info',
  );
  return getLocation();
}
