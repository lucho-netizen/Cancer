import  { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
          // Realiza una solicitud al servidor de autenticación para intercambiar el código por un token de acceso
          const response = await axios.post('http:localhost:3000/', { code });
          const accessToken = response.data.access_token;
          // Guarda el token de acceso en el almacenamiento local o en el estado de la aplicación
          localStorage.setItem('accessToken', accessToken);
          // Redirige al usuario a la página principal o a donde corresponda en tu aplicación
          window.location.href = '/';
        } else {
          // Maneja el caso en el que no hay un código de autorización en la URL de callback
          console.error('No se encontró código de autorización en la URL de callback');
        }
      } catch (error) {
        console.error('Error al manejar la respuesta de la URL de callback:', error);
      }
    };

    handleCallback();
  }, []);

  return (
   window.location.href="/dashboard"
  );
};

export default Callback;
