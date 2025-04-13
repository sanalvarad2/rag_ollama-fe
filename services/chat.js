

const preguntar = async (axiosInstance ,pregunta, chatId) => {  
    const formData = new FormData();
    formData.append('pregunta', pregunta);
    formData.append('chatId', chatId);
    const response = await axiosInstance.post('./api/preguntar', formData);
    return response.data;  
};

const getChatId = async (axiosInstance) => {

    const response = await axiosInstance.get('./api/chat-id');
    return response.data;
};

const getChat = async (axiosInstance, chatId) => {

    const response = await axiosInstance.get(`./api/conversations/${chatId}`);
    return response.data;

};

const getChats = async (axiosInstance) => {
    const response = await axiosInstance.get('./api/conversations');
    return response.data;
}

export { preguntar, getChatId, getChats,getChat };