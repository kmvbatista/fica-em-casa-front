export default function getLocation() {
  return navigator.geolocation.getCurrentPosition((position) => {
    return position;
  });
}
