import React, { useEffect, useState, useCallback } from 'react';
import CustomTextInput from '../UI/CustomTextInput';
import GETApplication from '../hooks/GETApplication';
import { useParams } from 'react-router-dom';
import GETChat from '../hooks/GETChat';
import ChatElementUser from '../UI/ChatElementUser';
import { ButtonsApplicationUser } from '../UI/Buttons'
import CircularProgress from '@mui/material/CircularProgress';

const ApplicationUser = () => {
    const [dataArray, setDataArray] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const tg = window.Telegram.WebApp;
    const [chatMessages, setChatMessages] = useState([]);

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

    const sendPhotoChat = useCallback((id) => {
        tg.sendData(`/handleShowPhoto ${id}`);
        tg.close();
    }, [tg])

    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <CircularProgress className='loading-spinner' size={150} color="success" />
            </div>
        )

    }

    return (
        <div className='ListApplicationOperator'>
            <div className='Label-ListApplicationOperator1'>
                <label className='labelTabs1'>
                    Заявка #{id}<br /> {dataArray.status}
                </label>
            </div>

            <div className='ApplicationOperator'>
                <CustomTextInput label="Имя пользователя" text={dataArray.username} />
                <CustomTextInput label="Адрес ПЗУ" text={dataArray.address} />
                <CustomTextInput label="Тема заявки" text={dataArray.subject} />
                <CustomTextInput label="Описание" text={dataArray.description} />
            </div>

            <ChatElementUser message={chatMessages} handlePhoto={sendPhotoChat} />
            <ButtonsApplicationUser id={id} status={dataArray.status} />
        </div>
    );
}

export default ApplicationUser;
