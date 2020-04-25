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

export async function postNecessityItems(items) {
  const dataToSend = {
    necessities: items,
  };
  try {
    await api.post('necessity', dataToSend);

    swal(
      'Necessidade cadastrada com sucesso!',
      'Esperamos que dê tudo certo!',
      'success',
    );
  } catch (error) {
    swal('Houve um erro no cadastro!', 'Tente novamente!', 'error');
    throw error;
  }
}

export async function postNecessity(category) {
  const dataToSend = {
    necessities: [
      {
        category,
        item: ' ',
        quantity: 1,
        measureUnit: ' ',
      },
    ],
  };
  try {
    await api.post('necessity', dataToSend);
    swal(
      'Necessidade cadastrada com sucesso!',
      'Esperamos que dê tudo certo!',
      'success',
    );
  } catch (error) {
    swal('Houve um erro no cadastro!', 'Tente novamente!', 'error');
    throw error;
  }
}

export async function getUserNecessities() {
  const response = await api.get('/necessity/user/necessities');
  console.log(response);
  return response.data;
}

export async function deleteSimpleNecessity(id) {
  await api.delete(`necessity/${id}`);
}

export async function deleteMany(necessities) {
  await api.delete(`/necessity`, {
    data: { necessities },
  });
}
export async function deleteByCategory(category) {
  debugger;
  await api.delete(`/necessity/category/many`, {
    data: { category },
  });
}

export async function addMany(necessities) {
  await api.post(`/necessity`, { necessities });
}
