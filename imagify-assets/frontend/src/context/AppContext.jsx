import React, { useEffect,  } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [credits, setCredits] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const nevigate = useNavigate();

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
  const generateImage = async (prompt) => {
    try{
      const {data} = await axios.post(backendUrl + "/api/images/generate-image", { prompt }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if(data.success){
        toast.success("Image generated successfully");
        loadCreaditsData();
        return data.resultImage;
      }else{
        toast.error("Failed to generate image" + data.message);
        if(data.creditBalance === 0){
          nevigate("/Buy");
        }
      }

    }catch (error) {
      toast.error("Error generating image");
      console.error("Error generating image:", error);
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
    generateImage,
  };

  
  return (
    <AppContext.Provider value={value}>
      {props.children}
      </AppContext.Provider>
  );
};


export default AppContextProvider;
