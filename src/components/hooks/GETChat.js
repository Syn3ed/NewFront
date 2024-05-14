
import axios from 'axios';
import {URL_SERVER} from '../Constants';

const GETChat = async (id) => {
    try {
        const response = await axios.get(`${URL_SERVER}/chat/${id}`);
        return response.data
    } catch (error) {
        console.error('Ошибка при получении сообщений чата', error);
    }
    
};

// GETChat();

export default GETChat;