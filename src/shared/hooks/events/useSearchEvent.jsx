import toast from "react-hot-toast";
import { useState } from "react";
import { searchEventRequest } from "../../../services/api";

export const useSearchEvent = () => {
    const [searchedEvents, setSearchedEvents] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const searchEvents = async (searchQuery) => {
        setIsSearching(true);
        try {
            const response = await searchEventRequest(searchQuery);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                    "Error al buscar"
                );
            } else {
                setSearchedEvents(response.data.events);
            }
        } catch (error) {
            console.error("Error al buscar ", error);
            toast.error("Error al buscar");
        }
        setIsSearching(false);
    };

    return {
        searchedEvents,
        isSearching,
        searchEvents,
    };
};
