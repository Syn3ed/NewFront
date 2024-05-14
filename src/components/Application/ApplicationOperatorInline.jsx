import React, { useEffect, useState } from 'react';
import CustomTextInput from '../UI/CustomTextInput';
import GETApplication from '../hooks/GETApplication';
import { useParams } from 'react-router-dom';
import GETChat from '../hooks/GETChat';
import ChatElementOperator from '../UI/ChatElementOperator';
import { ButtonsApplicationOperatorInline } from '../UI/Buttons'
import CircularProgress from '@mui/material/CircularProgress';

const ApplicationOperatorInline = () => {
    const [dataArray, setDataArray] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const tg = window.Telegram.WebApp;
    const { id } = useParams();
    const [chatMessages, setChatMessages] = useState([]);
    const operatorId = tg.initDataUnsafe.user.id;
    const queryId = tg.initDataUnsafe?.query_id;
    useEffect(() => {
        const fetchData = async () => {
            const data = await GETApplication(id);
            const data1 = await GETChat(id);
            setChatMessages(data1);
            setDataArray(data[0]);
            setIsLoading(false);
        };

        fetchData();

    }, [id]);

    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <CircularProgress className='loading-spinner' size={150} color="success" />
            </div>
        )

    }
    const handleShowPhoto = (idMedia) => {
        console.log(idMedia);
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId,
            idMedia,
            operatorId,
        }
        fetch('https://www.tgbottp.ru/handleShowPhoto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    };
    return (
        <div className='ListApplicationOperator'>
            <div className='Label-ListApplicationOperator1'>
                <label className='labelTabs1'>
                    Заявка #{id} <br />
                    {dataArray.status}
                </label>
            </div>

            <div className='ApplicationOperator'>
                <CustomTextInput label="Имя пользователя" text={dataArray.username} />
                <CustomTextInput label="Адрес ПЗУ" text={dataArray.address} />
                <CustomTextInput label="Тема заявки" text={dataArray.subject} />
                <CustomTextInput label="Описание" text={dataArray.description} />
            </div>

            <ChatElementOperator message={chatMessages} handlePhoto={handleShowPhoto} />
            <ButtonsApplicationOperatorInline id={id} status={dataArray.status} />
        </div>
    );
}

export default ApplicationOperatorInline;
