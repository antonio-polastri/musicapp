import React from 'react';
import ReactDOM from 'react-dom';
import AuthService from "./services/auth.service";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './index.css';
import App from './App';
import { Login } from './component/template/loginpage';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react' 
import { Header } from './component/template/header';
import { Footer } from './component/template/footer';
import Appcontainer from './Appcontainer';




ReactDOM.render(
 <Appcontainer></Appcontainer>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 