export function getUserData() {
  try {
    const { user } = JSON.parse(document.cookie);
    return user;
  } catch (error) {
    console.log('não foi possível encontrar usuário logado');
  }
}

export function setCookies(responseData) {
  try {
    const { user, token } = responseData;
    document.cookie = `{"user": ${JSON.stringify(
      user,
    )}, "token": ${JSON.stringify(token)} }`;
  } catch (error) {
    console.log('Houve um erro ao setar os cookies');
  }
}
