import { useState } from 'react';
import toast from 'react-hot-toast';
import { loginRequest } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (user, password) => {
    setIsLoading(true);
    const userLogin = {
      user,
      password,
    };

    try {
      const response = await loginRequest(userLogin);
      setIsLoading(false);

      if (response.error) {
        toast.error(
          response?.e?.response?.data ||
          'Credenciales no validas'
        );
        return;
      }

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', response.data.loggedUser.role);
      toast.success('¡Bienvenido!');
      navigate('/rooms');
    } catch (err) {
      setIsLoading(false);
      toast.error('Error al intentar iniciar sesión');
    }
  };

  return {
    login,
    isLoading,
  };
};
