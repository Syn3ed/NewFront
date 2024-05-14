// import { useNavigate } from 'react-router-dom';
import React from'react';
const CardUsers = ({ messages,stat }) => {
    // const navigate = useNavigate();


    // const handleRowClick = (id) => {

    // };

    return (
        (messages &&
            <div className='card-form'>
                {messages.map((message, index) => (
                    <div key={index} className="card-applications" onClick={() => stat(message.id)}>
                        <div className='labelCard'>
                            <label className='Numberlabel'>№{message.id}</label>
                            <div className={'StatusCapsule-' + [message.status]}>
                                <label className='Statuslabel'>{message.status}</label>
                            </div>
                        </div>
                        <div className='NameUserCard'>
                            <label className='NameUserlabel'>ФИО пользователя</label>
                            <p className='NameUserP'>{message.username}</p>
                        </div>
                        <div className='ThemeCard'>
                            <label className='Themelabel'>Роль пользователя</label>
                            <p className='ThemeP'>{message.RoleId}</p>
                        </div>
                        <div className='ThemeCard'>
                            <label className='Themelabel'>Id телеграма</label>
                            <p className='ThemeP'>{message.telegramId}</p>  
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}

export default CardUsers;
