import { useState } from 'react';
import { saveEventRequest } from '../../../services/api';
import toast from 'react-hot-toast';

export const useSaveEvent = () => {
    const [isLoading, setIsLoading] = useState(false);

    const save = async (type, hotel, price, image) => {
        setIsLoading(true);
        const event = {
            type, hotel, price, image
        };
        try {
            const response = await saveEventRequest(event);
            setIsLoading(false);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message || 
                    'Error guardando evento'
                );
            } else {
                toast.success('Evento guardado correctamente');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error guardando evento:', error);
            toast.error('Error guardando evento');
        }
    };

    return {
        save, 
        isLoading
    };
};
