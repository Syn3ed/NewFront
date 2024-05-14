import React from 'react';

const ChatElementUser = ({ message, handlePhoto }) => {


    return (
        <div className="chat-element">
            {message.map((message, index) => (
                <div key={index} className={message.roleUser === 'User' ? 'User' : 'Operator'}>
                    <div className={message.roleUser === 'User' ? 'UserMessage' : 'OperatorMessage'}>
                        {message.roleUser === 'User' ? message.username : message.nicknameOperator}
                    </div>
                    <div className={message.roleUser === 'User' ? 'UserTextMessage' : 'OperatorTextMessage'}> {message.textMessage}</div>
                    {message.IdMedia && (
                        <button className='buttonPhoto' onClick={() => handlePhoto(message.IdMedia)} >
                            Показать файл
                        </button>
                    )}
                    <div className={message.roleUser === 'User' ? 'UsMessageTime' : 'OpMessageTime'}>{message.Time}</div>
                </div>
            ))}
        </div>
    );

}

export default ChatElementUser;