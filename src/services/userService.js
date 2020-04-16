import api from './api';

export const getAssistCategories = async () => {
  try {
    const response = await api.get('/assist/5e949ecb51a08057b7bd7265/user');
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
};
