import { useState } from "react";
import toast from "react-hot-toast";
import { updateHotelRequest } from "../../../services/api";

export const useUpdateHotel = () => {
    const [updatedHotel, setUpdatedHotel] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const updateHotel = async (id, hotel) => {
        setIsFetching(true);
        try {
            const response = await updateHotelRequest(id, hotel);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                    'Error al actualizar el hotel'
                );
            } else {
                setUpdatedHotel(response.data);
                toast.success('Hotel actualizado');
            }
        } catch (error) {
            console.error('Error al actualizar el hotel:', error);
            toast.error('Error al actualizar el hotel');
        }
        setIsFetching(false);
    };

    return {
        updatedHotel,
        isFetching,
        updateHotel
    };
};
