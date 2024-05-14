import React, { useState } from 'react';

const CustomTabs = ({ initialActiveTab, changeTab }) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab || 'all');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (changeTab) {
            changeTab(tab);
        }
    };

    return (
        <div className="tabs-container">
            <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
                Все
            </div>
            <div className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => handleTabChange('pending')}>
                В ожидании
            </div>
            <div className={`tab ${activeTab === 'processing' ? 'active' : ''}`} onClick={() => handleTabChange('processing')}>
                В обработке
            </div>
            <div className={`tab ${activeTab === 'closed' ? 'active' : ''}`} onClick={() => handleTabChange('closed')}>
                Закрытые
            </div>
        </div>
    );
}

export default CustomTabs;

