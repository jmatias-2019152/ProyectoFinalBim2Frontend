import toast from "react-hot-toast"
import { getCategoryRequest } from "../../../services/api"
import { useState } from "react"

export const useGetCategories = () => {
    const [ categories, setCategories ] = useState(null)

    const getCategories = async() => {
        const response = await getCategoryRequest()
        if(response.error){
          return toast.error(
            response?.err?.response?.data?.messagge || 
            'Error al obtener los las categorías'
          )
        }
        setCategories(response.data)
      }
    return {
        categories, 
        isFetching: !categories,
        getCategories
    }
}

