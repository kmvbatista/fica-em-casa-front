export default function authenticate(isUserLogged) {
  if (process.env.NODE_ENV == 'development') {
    return true;
  }
  return isUserLogged;
}
