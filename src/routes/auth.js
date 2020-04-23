export default function authenticate() {
  const isDevelopment = false;
  if (isDevelopment) {
    return true;
  }
  const cookies = document.cookie;
  if (cookies && cookies !== '') {
    try {
      const { token } = JSON.parse(cookies);
      if (token) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
}
