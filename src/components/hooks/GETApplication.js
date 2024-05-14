import axios from 'axios';
import { URL_SERVER } from '../Constants';



const GETApplication = (id) => {
  return axios.get(`${URL_SERVER}/mes/${id}`)
    .then(response => {
      const dataArray = response.data.map(item => ({
        userRequestId: item.userRequestId,
        status: item.status,
        description: item.description,
        subject: item.subject,
        username: item.username,
        address: item.address,
        userId: item.userId
      }));
      return dataArray;
    })
    .catch(error => {
      console.error('Ошибка при получении данных о заявке:', error);
      throw error;
    });
};

export default GETApplication;


