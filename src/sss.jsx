
import React, { useEffect, useState } from 'react';
import './App.css';
import CustomTextArea from './components/UI/CustomTextArea';
import CardApplications from './components/UI/CardApplications';
import CustomTabs from './components/UI/CustomTabs';
import CustomTextInput from './components/UI/CustomTextInput';
import ChatElementUser from './components/UI/ChatElementUser';
import GETApplication from './components/hooks/GETApplication';
import GETChat from './components/hooks/GETChat';
import ChatElementOperator from './components/UI/ChatElementOperator';
import GETApplicationList from './components/hooks/GETApplicationList';

// import axios from 'axios';
function Sss() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [activeTab, setActiveTab] = useState('all');
  const [chatMessages, setChatMessages] = useState([]);
  // const [dataArray, setDataArray] = useState([]);
  const [application, setApplication] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GETApplication(7);
      const data1 = await GETChat();
      const data2 = await GETApplicationList();
      // setDataArray(data);
      setChatMessages(data1);
      setApplication(data2);
      console.log(data);
      console.log('asdasdas   ',data1);
      console.log('ssssssss   ',data2);
    };

    fetchData();

  }, []);
  const handleTextChange1 = (text) => {
    setText1(text);
    console.log(text1);
  };

  const handleTextChange2 = (text) => {
    setText2(text);
    console.log(text2);
  };

  const handleTextChange3 = (text) => {
    setText3(text);
    console.log(text3);
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  return (
    <div className="App">
      <CustomTextArea placeholder="Введите адрес ПЗУ" onTextChange={handleTextChange1} />
      <CustomTextArea label="Тема заявки" placeholder="Введите тему заявки" onTextChange={handleTextChange2} />
      <CustomTextArea label="Описание заявки" placeholder="Введите описание завки" onTextChange={handleTextChange3} />
      <CustomTextInput label="Тема заявки" text="Введите тему заявки" />
      <ChatElementUser message={chatMessages} />
      <ChatElementOperator message={chatMessages}/>
      <CardApplications messages={application}/>
      <CustomTabs changeTab={changeTab}  />
    </div>
  );
}

export default Sss;
