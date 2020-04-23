import api from './api';

export async function getAssistCategories() {
  try {
    const response = await api.get('/assist/user/assists');
    return response.data;
  } catch (error) {
    if (error.response.data.error) {
      console.log(error.response.data.error);
    }
  }
}
export async function getPendingNecesseties() {
  try {
    const response = await api.get('/necessity/status/pending');
    return response.data;
  } catch (error) {
    if (error.response.data.error) {
      console.log(error.response.data.error);
    }
  }
}
