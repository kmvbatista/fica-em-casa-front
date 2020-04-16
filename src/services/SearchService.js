import api from './api';

export const getNearNeedy = async (coords) => {
  try {
    const response = await api.get(
      `/search/necessity?latitude=${coords.latitude}&longitude=${coords.longitude}`,
      {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    );
    console.log(response);
  } catch (e) {
    return e.response.data.error;
  }
};
