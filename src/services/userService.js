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
