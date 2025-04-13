import React, { useContext } from 'react';
import axiosInstance from '../services/axios'; // Adjust the path if necessary
import { AxiosContext } from './axiosContext';

export const AxiosProvider = ({ children }) => {
  return (
    <AxiosContext.Provider value={{axios: axiosInstance}}>
      {children}
    </AxiosContext.Provider>
  );
};
