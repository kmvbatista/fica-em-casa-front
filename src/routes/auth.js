export default function authenticate(isUserLogged) {
  const isDevelopment = false;
  if (isDevelopment) {
    return true;
  }
  return isUserLogged;
}
