import toast from "react-hot-toast";
import { getHotelRequest } from "../../../services/api";
import { useState, useEffect } from "react";

export const useGetHotels = () => {
    const [hotels, setHotels] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await getHotelRequest();
                if(response.error){
                    toast.error(
                        response?.err?.response?.data?.messagge || 
                        'Error al cargar los hoteles'
                    );
                } else {
                    setHotels(response.data);
                }
                setIsLoading(false);
            } catch (error) {
                toast.error('Error al cargar los hoteles');
                setIsLoading(false);
            }
        };
        fetchHotels();
    }, []);

    return {
        hotels,
        isFetching: isLoading,
    };
};
