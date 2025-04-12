import { useContext } from 'react';
import { AxiosContext } from '../context/axiosContext';
import { cargarDocumento, getDocumentos } from '../services/documentos';

const useDocumentos = () => {
  const {axios} = useContext(AxiosContext);

  return {
    cargarDocumento: (file) => cargarDocumento(axios, file),
    getDocumentos: () => getDocumentos(axios),
  };
};

export default useDocumentos;