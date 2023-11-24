export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error.message);
          }
        );
      } else {
        reject('Geolocation is not supported by your browser.');
      }
    });
  };