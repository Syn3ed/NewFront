import { useNavigate } from 'react-router-dom';
const CardApplications = ({ messages, stat }) => {
    const navigate = useNavigate();
    const statusMap = {
        'Заявка закрыта': 1,
        'Заявка в обработке': 2,
        'Ожидает ответа оператора': 3
    };

    const handleRowClick = (id) => {
        if (stat === 'User') {
            navigate(`/requests/${id}`);
        } else if (stat === 'Operator') {
            navigate(`/requestsOperator/${id}`);
        }
    };

    return (
        (messages &&
            <div className='card-form'>
                {messages.map((message, index) => (
                    <div key={index} className="card-applications" onClick={() => handleRowClick(message.id)}>
                        <div className='labelCard'>
                            <label className='Numberlabel'>№{message.id}</label>
                            <div className={'StatusCapsule-' + statusMap[message.status]}>
                                <label className='Statuslabel'>{message.status}</label>
                            </div>
                        </div>
                        <div className='NameUserCard'>
                            <label className='NameUserlabel'>ФИО пользователя</label>
                            <p className='NameUserP'>{message.username}</p>
                        </div>
                        <div className='ThemeCard'>
                            <label className='Themelabel'>Тема заявки</label>
                            <p className='ThemeP'>{message.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}

export default CardApplications;
