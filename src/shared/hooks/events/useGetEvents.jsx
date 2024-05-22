import toast from "react-hot-toast"
import { useState } from "react"
import { getEventsRequest } from "../../../services/api"

export const useGetEvents = () => {
    const [events, setEvents] = useState(null)

    const getEvents = async () => {
        const response = await getEventsRequest()
        if (response.error) {
            return toast.error(
                response?.err?.response?.data?.messagge ||
                'Error al obtener los eventos'
            )
        }
        setEvents(response.data)
    }
    return {
        events,
        isFetching: !events,
        getEvents
    }
}

