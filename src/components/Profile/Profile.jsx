import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CustomTextInput from '../UI/CustomTextInput';
import CircularProgress from '@mui/material/CircularProgress';
import {ButtonsProfile} from '../UI/Buttons'

export const Profile = () => {
    const { id } = useParams();
    const tg = window.Telegram.WebApp;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [filteredArray, setFilteredArray] = useState([]);


    useEffect(() => {
        tg.MainButton.hide()
        tg.BackButton.show()
    }, [tg])

    useEffect(() => {
        const handleBackButton = () => {
            navigate(-1);
        };
        tg.BackButton.onClick(handleBackButton);
        return () => {
            tg.BackButton.offClick(handleBackButton);
        };
    }, [navigate, tg]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.tgbottp.ru/adminFullList');
                const data = response.data.map(item => ({
                    id: item.id,
                    telegramId: item.telegramId,
                    username: item.username,
                    RoleId: item.RoleId,
                }));

                const filteredData = data.filter(item => item.id === parseInt(id));
                setFilteredArray(filteredData);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
            
        };

        fetchData();
    }, [id]);

    const roleMap = {
        1: 'Администратор',
        2: 'Пользователь',
        3: 'Оператор'
    };
    useEffect(() => {
        tg.BackButton.show();
    }, [navigate, tg]);



    useEffect(() => {
        const handleBackButton = () => {
            navigate(-1);
        };
        tg.BackButton.onClick(handleBackButton);
        return () => {
            tg.BackButton.offClick(handleBackButton);
        };
    }, [navigate, tg.BackButton]);

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
                   Профиль пользователя
                </label>
            </div>
            <div className="UserApplicForm">
                <div className="UserApplicFormFilling">
                   
                    <CustomTextInput label="ФИО пользователя" text={filteredArray[0]?.username} />
                    <CustomTextInput label="Телеграм id" text={filteredArray[0]?.telegramId} />
                    <CustomTextInput label="Роль" text={roleMap[filteredArray[0]?.RoleId]} />
                    <ButtonsProfile filteredArray={filteredArray}/>
                </div>

            </div>
        </div>
    )
}