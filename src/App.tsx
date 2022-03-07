import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";


const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </>
    );
}

export default App;
