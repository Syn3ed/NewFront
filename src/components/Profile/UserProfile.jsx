import React, { useEffect, useState, useCallback } from 'react';
import CustomTextInput from '../UI/CustomTextInput';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const UserProfile = () => {

    const { id } = useParams();
    const tg = window.Telegram.WebApp;
    const [filteredArray, setFilteredArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        tg.MainButton.hide()
        tg.BackButton.hide()
    }, [tg])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.tgbottp.ru/adminFullList');
                const data = response.data.map(item => ({
                    id: item.id,
                    telegramId: parseInt(item.telegramId),
                    username: item.username,
                    RoleId: item.RoleId,
                }));

                console.log(data)
                const filteredData = data.filter(item => parseInt(item.telegramId) === parseInt(id));
                console.log(filteredData)
                setFilteredArray(filteredData);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [id]);

    const changeName = useCallback(() => {
        tg.sendData(`/changeName ${filteredArray[0]?.telegramId}`);
        // tg.close();
    }, [tg, filteredArray]);

    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <CircularProgress className='loading-spinner' size={150} color="success" />
            </div>
        )

    }

    const renderButtons = () => {

        return (
            <div className='button-list'>
                <button type="button" className='buttonEl' onClick={changeName}>Изменить ФИО</button>
            </div>
        )

    }


    return (
        <div>
            <div className='Label-ListApplicationOperator1'>
                <label className='labelTabs1'>
                    Профиль
                </label>

            </div>
            <div className='ApplicationOperator'>
                <CustomTextInput label="Имя пользователя" text={filteredArray[0].username} />
                <CustomTextInput label="ID телеграма" text={filteredArray[0].telegramId} />
                {renderButtons()}
            </div>
        </div>
    )

}

export default UserProfile;