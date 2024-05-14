import React from 'react';

const ChatElementOperator = ({ message }) => {

    
    return (
        <div className="chat-element">

            {/*Operator User  UserMessage OperatorMessage OperatorTextMessage UserTextMessage UsMessageTime OpMessageTime*/}
            {message.map((message, index) => (
                <div key={index} className={message.roleUser === 'User' ? 'Operator' : 'User'}>
                    <div className={message.roleUser === 'User' ? 'OperatorMessage1' : 'UserMessage1'}>
                        {message.roleUser === 'User' ? message.username : message.username}
                    </div>
                    <div className={message.roleUser === 'User' ? 'OperatorTextMessage' : 'UserTextMessage'}> {message.textMessage}</div>
                    {message.IdMedia && (
                        <button className='buttonPhoto' >
                            Показать файл
                        </button>
                    )}
                    <div className={message.roleUser === 'User' ? 'OpMessageTime' : 'UsMessageTime'}>{message.Time}</div>
                </div>
            ))}
        </div>
    );

}

export default ChatElementOperator;