import toast from "react-hot-toast";
import { deleteHotelRequest } from "../../../services/api";

export const useDeleteHotel = () => {
  const deleteHotel = async (id) => {
    try {
      const response = await deleteHotelRequest(id);
      if (response.error) {
        toast.error('Error al eliminar el hotel');
      } else {
        toast.success('Hotel eliminado');
      }
    } catch (error) {
      toast.error('Error al eliminar el hotel');
    }
  };

  return {
    deleteHotel
  };
};
