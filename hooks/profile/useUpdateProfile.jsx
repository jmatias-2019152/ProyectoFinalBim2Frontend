import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../../services/api";

export const useUpdateProfile = () => {
    const [updatedProfile, setUpdatedProfile] = useState(null);

    const updateUserProfile = async (formData) => {
        try {
            const response = await updateProfile(formData);
            if (response.error) {
                toast.error(
                    response?.err?.response?.data?.message ||
                    'Error al actualizar'
                );
            } else {
                setUpdatedProfile(response.data);
                toast.success('Perfil actualizado');
            }
        } catch (error) {
            toast.error('Error al actualizar');
        }
    };

    return {
        updatedProfile,
        isFetching: !updatedProfile,
        updateUserProfile
    };
};
