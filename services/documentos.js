

export const cargarDocumento = (axiosInstance, file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axiosInstance.post('/cargar-documento', formData);
};

export const getDocumentos = (axiosInstance) => {
  return axiosInstance.get('/get-documentos');
};