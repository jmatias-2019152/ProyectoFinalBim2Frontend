import toast from "react-hot-toast";
import { useState } from "react";
import { getEventsRequest } from "../../../services/api";

export const useGetEvents = () => {
    const [events, setEvents] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const getEvents = async () => {
        setIsFetching(true);
        try {
            const response = await getEventsRequest();
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                    'Error al obtener los eventos'
                );
            } else {
                setEvents(response.data);
            }
            setIsFetching(false);
        } catch (error) {
            console.error('Error al obtener los eventos:', error);
            toast.error('Error al obtener los eventos');
            setIsFetching(false);
        }
    };

    return {
        events,
        isFetching,
        getEvents
    };
};
