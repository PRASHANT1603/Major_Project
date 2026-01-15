import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [credits, setCredits] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreaditsData = async () => {
    try{
      const {data} = await axios.get(backendUrl + "/api/users/credits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(data.success){
        setCredits(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);

    }
  };

    const logout = () => {
      localStorage.removeItem("token");
      setToken('');
      setUser(null);
      toast.info("Logged out successfully");
    }


    useEffect(() => {
      if(token){
        loadCreaditsData();
      }
    }, [token]);
  

      
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credits,
    setCredits,
    loadCreaditsData,
    logout,
  };

  
  return (
    <AppContext.Provider value={value}>
      {props.children}
      </AppContext.Provider>
  );
};


export default AppContextProvider;
