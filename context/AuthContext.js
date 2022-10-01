import React, {createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({})
  const login = (username, password) => {
    if(username == "chuminhnam" && password == "chuminhnam"){
      const obj = {
        username: "chuminhnam",
      }
      setUserInfo(obj)
      console.log(userInfo)
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }
  return (
    <AuthContext.Provider value={{
        login,
        userInfo,
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

