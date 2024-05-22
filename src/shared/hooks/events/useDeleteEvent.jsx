
import toast from 'react-hot-toast';
import { deleteEventRequest } from '../../../services/api';

export const useDeleteEvent = () => {
  const deleteEvent = async (id) => {
    try {
      const response = await deleteEventRequest(id);
      if (response.error) {
        toast.error('Error al eliminar el evento');
      } else {
        toast.success('Evento eliminado');
      }
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      toast.error('Error al eliminar el evento');
    }
  };

  return {
    deleteEvent
  };
};
