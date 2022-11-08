import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyDyMtG5CvvtcKHE5zhAGSAKJJ_2TFrOk10",
  authDomain: "react-chat-app-9631a.firebaseapp.com",
  databaseURL: "https://react-chat-app-9631a-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-9631a",
  storageBucket: "react-chat-app-9631a.appspot.com",
  messagingSenderId: "101070768428",
  appId: "1:101070768428:web:e72ae8e31ad048dab08489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />   
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
