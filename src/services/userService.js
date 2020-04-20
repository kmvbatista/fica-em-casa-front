import api from './api';
import { getUserData } from './sessionService';

export const getAssistCategories = async () => {
  const user = getUserData();
  try {
    const response = await api.get(`/assist/${user.id}/user`);
    return response.data;
  } catch (error) {
    if (error.response.data.error) {
      console.log(error.response.data.error);
    }
  }
};
