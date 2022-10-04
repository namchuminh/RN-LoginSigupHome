import React, {createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios').default;

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({})
  const [error, setError] = useState(null)

  const login = (username, password) => {
    axios.post('http://10.0.2.2:8000/api/user/login/', {
      username: username,
      password: password
    })
    .then(function (response) {
      setUserInfo(response.data)
      AsyncStorage.setItem('@userInfo', JSON.stringify(userInfo))
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userInfo')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  const getInfoUser = async () => {
    const token = await getData()
    console.log(token)
    // axios.get('http://10.0.2.2:8000/api/user/', {
    //   headers: {
    //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
    //   }
    // })
  }
  return (
    <AuthContext.Provider value={{
        login,
        userInfo,
        error,
        getInfoUser
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

