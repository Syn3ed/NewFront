import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateForm from './components/FormApplication/createForm'
import ListApplicationOperator from './components/ListApplication/ListApplicationOperator';
import ListApplicationUser from './components/ListApplication/ListApplicationUser'
import ApplicationOperator from './components/Application/ApplicationOperator'
import ApplicationUser from './components/Application/ApplicationUser'
import {Menu} from './components/AdminMenu/Menu'
import { Profile } from './components/Profile/Profile';
import ApplicationUserInline from './components/Application/ApplicationUserInline'
import ApplicationOperatorInline from './components/Application/ApplicationOperatorInline'
import UserProfile from './components/Profile/UserProfile';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListApplicationOperator />} />
        <Route path="/RequestUserList/:id" element={<ListApplicationUser />} />
        <Route path="/FormReq" element={< CreateForm/>} />

        <Route path="/requests/:id" element={< ApplicationUser/>} />
        <Route path="/requestsOperator/:id" element={< ApplicationOperator/>} />
        <Route path="/Inlinerequests/:id" element={<ApplicationUserInline />} />

        <Route path="/InlinerequestsOperator/:id" element={<ApplicationOperatorInline />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Profile/:id" element={<Profile />} />

        <Route path="/UserProfile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
