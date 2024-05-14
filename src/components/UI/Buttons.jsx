import React from 'react';
import { useCallback } from 'react';
import { tg } from '../Constants';

export const ButtonsApplicationUser = ({ status, id }) => {
    const closeReq = useCallback(() => {
        tg.sendData(`/closeReq ${id}`);
        tg.close();
    }, [id]);

    const sendPhoto = useCallback(() => {
        tg.sendData(`/resToOperatorPhoto ${id}`);
        tg.close();
    }, [id]);

    const resumReq = useCallback(() => {
        tg.sendData(`/resumeReq ${id}`);
        tg.close();
    }, [id]);

    let buttons = null;

    switch (status) {
        case 'ожидает ответа оператора':
        case 'Заявка в обработке':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={sendPhoto}>Отправить сообщение</button>
                </div>
            );
            break;
        default:
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={resumReq}>Возобновить заявку</button>
                </div>
            );
            break;
    }

    return buttons;
};

export const ButtonsApplicationOperator = ({ status, id }) => {
    const closeReq = useCallback(() => {
        tg.sendData(`/closeReq ${id}`);
        tg.close();
    }, [id]);

    const sendPhoto = useCallback(() => {
        tg.sendData(`/resToUserPhoto ${id}`);
        tg.close();
    }, [id]);

    const resumReq = useCallback(() => {
        tg.sendData(`/resumeReq ${id}`);
        tg.close();
    }, [id]);

    let buttons = null;

    switch (status) {
        case 'ожидает ответа оператора':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={sendPhoto}>Обработать заявку и отправить сообщение</button>
                </div>
            );
            break;
        case 'Заявка в обработке':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={sendPhoto}>Отправить сообщение</button>
                </div>
            );
            break;
        default:
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={resumReq}>Возобновить заявку</button>
                </div>
            );
            break;
    }

    return buttons;
};

export const ButtonsApplicationUserInline = ({ dataArray, id, status }) => {

    const onSendPhoto = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
            operatorId: tg.initDataUnsafe.user.id
        };

        fetch('https://www.tgbottp.ru/resToUserPhoto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    const resumeReq = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
        }
        fetch('https://www.tgbottp.ru/resumeReq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    const closeReq = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
            operatorId: tg.initDataUnsafe.user.id
        }
        fetch('https://www.tgbottp.ru/closeReq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    let buttons = null;

    switch (status) {
        case 'ожидает ответа оператора':
        case 'Заявка в обработке':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={onSendPhoto}>Отправить сообщение</button>
                </div>
            );
            break;
        default:
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={resumeReq}>Возобновить заявку</button>
                </div>
            );
            break;
    }

    return buttons;
};

export const ButtonsApplicationOperatorInline = ({ dataArray, id, status }) => {
    const onSendPhoto = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
            operatorId: tg.initDataUnsafe.user.id
        };

        fetch('https://www.tgbottp.ru/replyToOperatorPhoto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    const resumeReq = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
        }
        fetch('https://www.tgbottp.ru/resumeReq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    const closeReq = useCallback(() => {
        const data = {
            userRequestId: dataArray.userRequestId,
            username: dataArray.username,
            queryId: tg.initDataUnsafe?.query_id,
            operatorId: tg.initDataUnsafe.user.id
        }
        fetch('https://www.tgbottp.ru/closeReq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            // tg.close();
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    }, [dataArray]);

    let buttons = null;

    switch (status) {
        case 'ожидает ответа оператора':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={onSendPhoto}>Обработать заявку и отправить сообщение</button>
                </div>
            );
            break;
        case 'Заявка в обработке':
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={closeReq}>Закрыть заявку</button>
                    <button type="button" className='buttonEl' onClick={onSendPhoto}>Отправить сообщение</button>
                </div>
            );
            break;
        default:
            buttons = (
                <div className='button-list'>
                    <button type="button" className='buttonEl' onClick={resumeReq}>Возобновить заявку</button>
                </div>
            );
            break;
    }

    return buttons;
};


export const ButtonsProfile = ({ filteredArray }) => {

    const changeRoleUser = useCallback(() => {
        tg.sendData(`/changeRoleUser ${filteredArray[0]?.telegramId}`);
        // tg.close();
    }, [filteredArray]);

    const changeRoleOperator = useCallback(() => {
        tg.sendData(`/changeRoleOperator ${filteredArray[0]?.telegramId}`);
        // tg.close();
    }, [filteredArray]);

    const changeRoleAdmin = useCallback(() => {
        tg.sendData(`/changeRoleAdmin ${filteredArray[0]?.telegramId}`);
        // tg.close();
    }, [filteredArray]);

    if (filteredArray.length > 0 && filteredArray[0].id === 1) {
        return (
            <div className='button-list'>
                <button type="button" className='buttonEl' onClick={changeRoleUser}>Изменить роль на пользователя </button>
                <button type="button" className='buttonEl' onClick={changeRoleOperator}>Изменить роль оператора</button>
            </div>
        );
    } else if (filteredArray.length > 0 && filteredArray[0].id === 2) {
        return (
            <div className='button-list'>
                <button type="button" className='buttonEl' onClick={changeRoleOperator}>Изменить роль оператора</button>
                <button type="button" className='buttonEl' onClick={changeRoleAdmin}>Изменить роль администратора</button>
            </div>
        );
    } else {
        return (
            <div className='button-list'>
                <button type="button" className='buttonEl' onClick={changeRoleUser}>Изменить роль на пользователя </button>
                <button type="button" className='buttonEl' onClick={changeRoleAdmin}>Изменить роль администратора</button>
            </div>
        )
    }
}