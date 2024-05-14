import axios from 'axios';
import {URL_SERVER} from '../Constants';

const GETApplicationList = async () => {
    try {
        const response = await axios.get(`${URL_SERVER}/req`);
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

export default GETApplicationList