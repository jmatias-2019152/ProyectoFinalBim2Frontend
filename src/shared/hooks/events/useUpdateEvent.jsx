import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateEventRequest } from '../../../services/api';

export const useUpdateEvent = () => {
    const [updatedEvent, setUpdatedEvent] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const updateEvent = async (id, event) => {
        setIsFetching(true);
        try {
            const response = await updateEventRequest(id, event);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                    'Error al actualizar'
                );
            } else {
                setUpdatedEvent(response.data);
                toast.success('Evento actualizado correctamente');
            }
        } catch (error) {
            console.error('Error al actualizar:', error);
            toast.error('Error al actualizar');
        }
        setIsFetching(false);
    };

    return {
        updatedEvent,
        isFetching,
        updateEvent
    };
};
