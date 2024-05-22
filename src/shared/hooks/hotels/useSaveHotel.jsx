import { useState } from "react";
import { saveHotelRequest } from "../../../services/api";
import toast from "react-hot-toast";

export const useSaveHotel = () => {
    const [isLoading, setIsLoading] = useState(false);

    const save = async (name, category, ubication, phone, email, image) => {
        setIsLoading(true);
        const hotel = {
            name, category, ubication, phone, email, image
        };
        try {
            const response = await saveHotelRequest(hotel);
            setIsLoading(false);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message || 
                    'Error guardando hotel'
                );
            } else {
                toast.success('Hotel guardado correctamente');
            }
        } catch (error) {
            setIsLoading(false);
            toast.error('Error guardando hotel');
        }
    };

    return {
        save, 
        isLoading
    };
};
