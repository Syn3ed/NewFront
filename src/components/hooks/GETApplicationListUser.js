import axios from 'axios';
import {URL_SERVER} from '../Constants';

const GETApplicationListUser = async (id) => {
    try {
        const response = await axios.get(`${URL_SERVER}/reqUser/${id}`);
        return (response.data.map(item => ({
            id: item.id,
            username: item.username,
            category: item.category,
            status: item.status,
            messageReq: item.messageReq
        })));
    } catch (e) {
        console.log(e);
    }
};

export default GETApplicationListUser