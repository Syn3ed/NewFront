import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import CardUsers from '../UI/CardUsers';
import CustomTabsMenu from '../UI/CustomTabsMenu';
import CircularProgress from '@mui/material/CircularProgress';

import { useNavigate } from 'react-router-dom';



export const Menu = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [filteredApplication, setFilteredApplication] = useState([]);
    const [dataArray, setDataArray] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [filteredDataArray, setFilteredDataArray] = useState([]);
    const tg = window.Telegram.WebApp;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        tg.MainButton.hide()
        tg.BackButton.hide()
    }, [tg])


    const roleMap = useMemo(() => ({
        1: 'Администратор',
        2: 'Пользователь',
        3: 'Оператор'
    }), []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.tgbottp.ru/adminFullList');
                const users = response.data.map(item => ({
                    id: item.id,
                    telegramId: item.telegramId,
                    username: item.username,
                    RoleId: roleMap[item.RoleId],
                }));
                setDataArray(users);
                setFilteredDataArray(users);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [roleMap]);


    useEffect(() => {
        if (activeTab === 'all') {
            setFilteredDataArray(dataArray);
        } else {
            const filteredList = dataArray.filter(item => item.RoleId === getStatusFromTab(activeTab));
            setFilteredApplication(filteredList)
            setFilteredDataArray(filteredList);
        }
    }, [activeTab, dataArray]);

    const getStatusFromTab = (tab) => {
        const statusMap = {
            all: null,
            pending: 'Оператор',
            processing: 'Администратор',
            closed: 'Пользователь'
        };
        return statusMap[tab];
    };

    const handleRowClick = (id) => {
        navigate(`/Profile/${id}`);
    };

    const handleSearch = (value) => {
        setSearchId(value);
        const filteredUsers = filteredApplication.filter(user =>
            user.telegramId.toLowerCase().includes(value.toLowerCase()) ||
            user.username.toLowerCase().includes(value.toLowerCase()) ||
            user.RoleId.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredDataArray(filteredUsers);
    };
    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <CircularProgress className='loading-spinner' size={150} color="success" />
            </div>
        )

    }

    return (
        <div className="menu">

            <div className='ListApplicationOperator'>
                <div className='Label-ListApplicationOperator1'>
                    <label className='labelTabs1'>
                        Меню Администратора
                    </label>
                    <CustomTabsMenu changeTab={changeTab} dataArray={dataArray} />
                </div>
            </div>

            <div className='AdminListButton'>
                <div className="form">
                    <div className={`form-filling1 disappear`}>
                        <input
                            className="SearchUser"
                            type="text"
                            placeholder="Введите ID, имя или роль пользователя"
                            value={searchId}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <CardUsers messages={filteredDataArray} stat={handleRowClick} />
                        {filteredDataArray.length === 0 && (
                            <div>Нет результатов</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );

}