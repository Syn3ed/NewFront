import React, { useState, useEffect } from 'react';

const CustomTabs = ({ initialActiveTab, changeTab, dataArray }) => {
    const [inProgressCount, setInProgressCount] = useState(0);
    const [awaitingOperatorCount, setAwaitingOperatorCount] = useState(0);
    const [closedCount, setClosedCount] = useState(0);
    const [activeTab, setActiveTab] = useState(initialActiveTab || 'all');

    useEffect(() => {
        const inProgress = dataArray.filter(item => ((item.status === 'Заявка в обработке'))).length;
        const awaitingOperator = dataArray.filter(item => item.status === 'ожидает ответа оператора').length;
        const closed = dataArray.filter(item => ((item.status === 'Заявка закрыта'))).length;


        setInProgressCount(inProgress);
        setAwaitingOperatorCount(awaitingOperator);
        setClosedCount(closed);
    }, [dataArray]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (changeTab) {
            changeTab(tab);
        }
    };

    return (
        <div className="tabs-container">
            <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
                Все {dataArray.length}
            </div>
            <div className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => handleTabChange('pending')}>
                В ожидании {awaitingOperatorCount}
            </div>
            <div className={`tab ${activeTab === 'processing' ? 'active' : ''}`} onClick={() => handleTabChange('processing')}>
                В обработке {inProgressCount}
            </div>
            <div className={`tab ${activeTab === 'closed' ? 'active' : ''}`} onClick={() => handleTabChange('closed')}>
                Закрытые {closedCount}
            </div>
        </div>
    );
}

export default CustomTabs;

