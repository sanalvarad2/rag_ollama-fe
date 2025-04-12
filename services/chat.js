

const preguntar = async (axiosInstance ,pregunta, chatId) => {
  try {
    const formData = new FormData();
    formData.append('pregunta', pregunta);
    formData.append('chatId', chatId);
    const response = await axiosInstance.post('/preguntar', formData);
    return response.data;
  } catch (error) {
    // Handle error appropriately, e.g., re-throw or return a specific error structure
    throw error; 
  }
};

const getChatId = async (axiosInstance) => {
  try {
    const response = await axiosInstance.get('/get-chat-id');
    return response.data;
  } catch (error) {
    // Handle error appropriately
    throw error;
  }
};

export { preguntar, getChatId };