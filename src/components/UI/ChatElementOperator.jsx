import React from 'react';

const ChatElementOperator = ({ message, handlePhoto }) => {


    return (
        <div className="chat-element">

            {/*Operator User  UserMessage OperatorMessage OperatorTextMessage UserTextMessage UsMessageTime OpMessageTime*/}
            {message.map((message, index) => (
                <div key={index} className={message.roleUser === 'User' ? 'User' : 'Operator'}>
                    <div className={message.roleUser === 'User' ? 'UserMessage1' : 'OperatorMessage'}>
                        {message.roleUser === 'User' ? message.username : message.username + '\n' + message.nicknameOperator}
                    </div>
                    <div className={message.roleUser === 'User' ? 'UserTextMessage' : 'OperatorTextMessage'}> {message.textMessage}</div>
                    {message.IdMedia && (
                        <button className='buttonPhoto' onClick={() => handlePhoto(message.IdMedia)}>
                            Показать файл
                        </button>
                    )}
                    <div className={message.roleUser === 'User' ? 'UsMessageTime' : 'OpMessageTime'}>{message.Time}</div>
                </div>
            ))}
        </div>
    );

}

export default ChatElementOperator;