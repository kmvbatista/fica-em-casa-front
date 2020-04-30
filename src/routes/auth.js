export default function authenticate(isUserLogged) {
  const isDevelopment = true;
  if (isDevelopment) {
    return true;
  }
  return isUserLogged;
}
