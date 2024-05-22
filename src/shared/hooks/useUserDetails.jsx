import { useState } from "react";
import { logout as logoutHandler } from "./useLogout";

const getUserDetails = () => {
  const userDetails = localStorage.getItem("user");
  if (userDetails) {
    return JSON.parse(userDetails);
  }
  return null;
};

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(getUserDetails());

  const logout = () => {
    logoutHandler();
    setUserDetails(null);
  };
  console.log(userDetails?.role)
  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails.username : "Guest",
    role: userDetails?.role,
    logout,
  };
};