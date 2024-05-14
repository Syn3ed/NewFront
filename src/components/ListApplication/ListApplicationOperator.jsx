import React, { useEffect, useState } from 'react';
import GETApplicationList from '../hooks/GETApplicationList';
import CardApplications from '../UI/CardApplications';
import CustomTabs from '../UI/CustomTabs';
import CircularProgress from '@mui/material/CircularProgress';

const ListApplicationOperator = () => {
    const [application, setApplication] = useState([]);
    const [filteredApplication, setFilteredApplication] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data2 = await GETApplicationList();
            setApplication(data2);
            setFilteredApplication(data2);
            setIsLoading(false);
        };

        fetchData();

    }, []);


    
    useEffect(() => {
        if (activeTab === 'all') {
            setFilteredApplication(application);
        } else {
            const filteredList = application.filter(item => item.status === getStatusFromTab(activeTab));
            setFilteredApplication(filteredList);
        }
    }, [activeTab, application]);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const getStatusFromTab = (tab) => {
        const statusMap = {
            all: null,
            pending: 'Заявка в обработке',
            processing: 'ожидает ответа оператора',
            closed: 'Заявка закрыта'
        };
        return statusMap[tab];
    };

    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <CircularProgress className='loading-spinner' size={150} color="success" />
            </div>
        )

    }
    
    return (
        <div className='ListApplicationOperator'>
            <div className='Label-ListApplicationOperator'>
                <label className='labelTabs'>
                    Заявки
                </label>
                <CustomTabs changeTab={changeTab} />
            </div>
            <CardApplications messages={filteredApplication} stat='Operator' />
        </div>
    );
}

export default ListApplicationOperator;
