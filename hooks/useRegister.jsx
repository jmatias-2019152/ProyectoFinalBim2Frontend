import { useState } from 'react';
import toast from 'react-hot-toast';
import { registerRequest } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (name, surname, email, phone, username, password) => {
    setIsLoading(true);
    const user = {
      name, 
      surname,
      username,
      password,
      phone,
      email,
    };

    try {
      const response = await registerRequest(user);
      setIsLoading(false);

      if (response.error) {
        const errors = response?.err?.response?.data?.errors;
        if (errors) {
          errors.forEach(error => toast.error(error.msg));
        } else {
          toast.error(
            response?.err?.response?.data?.msg ||
            response?.err?.data?.msg ||
            'No se pudo registrar el usuario'
          );
        }
        return;
      }

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', response.data.token.role);
      navigate('/rooms');
    } catch (err) {
      setIsLoading(false);
      toast.error('No se pudo registrar el usuario');
    }
  };

  return {
    register,
    isLoading,
  };
};
