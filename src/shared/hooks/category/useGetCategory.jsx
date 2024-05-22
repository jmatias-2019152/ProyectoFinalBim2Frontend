import toast from "react-hot-toast";
import { useState } from "react";
import { getCategoryRequest } from "../../../services/api";

export const useGetCategories = () => {
  const [categories, setCategories] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getCategories = async () => {
    setIsFetching(true);
    try {
      const response = await getCategoryRequest();
      if (response.error) {
        toast.error(
          response?.err?.response?.data?.message ||
          'Error al obtener las categorías'
        );
      } else {
        setCategories(response.data);
      }
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      toast.error('Error al obtener las categorías');
    }
    setIsFetching(false);
  };

  return {
    categories,
    isFetching,
    getCategories
  };
};
