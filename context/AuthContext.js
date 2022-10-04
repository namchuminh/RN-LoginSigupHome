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
      storeData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  const getInfoUser = async () => {
    const token = await getData()
    axios.get('http://10.0.2.2:8000/api/user/', {
      headers: {
        Authorization: 'Bearer ' + token.access //the token is a variable which holds the token
      }
    })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
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

