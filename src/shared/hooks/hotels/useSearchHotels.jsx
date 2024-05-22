import toast from "react-hot-toast";
import { searchHotelRequest } from "../../../services/api";
import { useState } from "react";

export const useSearchHotels = () => {
    const [searchedHotels, setSearchedHotels] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const searchHotels = async (searchQuery) => {
        setIsSearching(true);
        try {
            const response = await searchHotelRequest(searchQuery);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                        "Error al buscar hoteles"
                );
            } else {
                setSearchedHotels(response.data.hotels);
            }
            setIsSearching(false);
        } catch (error) {
            console.error("Error al buscar hoteles:", error);
            toast.error("Error al buscar hoteles");
            setIsSearching(false);
        }
    };

    return {
        searchedHotels,
        isSearching,
        searchHotels,
    };
};
