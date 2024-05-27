import React, { useState, useEffect } from 'react';
import CustomTextArea from '../UI/CustomTextArea';


const Form = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false); 
  const [isFormFilled, setIsFormFilled] = useState(false);
  const tg = window.Telegram.WebApp;

  const handleTextChange1 = (text) => {
    setText1(text);
  };

  const handleTextChange2 = (text) => {
    setText2(text);
  };

  const handleTextChange3 = (text) => {
    setText3(text);
  };

  useEffect(() => {
    if (text1.trim() !== '' && text2.trim() !== '' && text3.trim() !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [text1, text2, text3]);

  const handleSubmit = () => {
    console.log('Форма отправлена', text1, text2, text3);
    const data = {
      address: text1,
      category: text2,
      description: text3,
      isSwitchOn: isSwitchOn
    };
    tg.sendData(JSON.stringify(data));
    console.log('Отправка данных:', JSON.stringify(data));
  };

  return (
    <div className="form">
      <div className='greeting'>
        <label>Здравствуйте!👋<br /> Чем мы можем вам помочь?</label>
      </div>
      <CustomTextArea label="Адрес" placeholder="Введите адрес ПЗУ" onTextChange={handleTextChange1} />
      <CustomTextArea label="Тема заявки" placeholder="Введите тему заявки" onTextChange={handleTextChange2} />
      <CustomTextArea label="Описание заявки" placeholder="Введите описание завки" onTextChange={handleTextChange3} />
      <div className="button-container">
        <button disabled={!isFormFilled} onClick={handleSubmit}>Отправить</button>
      </div>
      <div className="form-group">
        <label htmlFor="switch" class="custom-label">Прикрепить к заявке файлы</label>
        <label className="switch">
          <input
            type="checkbox"
            id="switch"
            checked={isSwitchOn}
            onChange={() => setIsSwitchOn(!isSwitchOn)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Form;
