import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './StyleSheets/index.css';
import App from './App';
import { Home } from './Pages/Home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <title>Grant Moore</title>
        <div>
            <React.StrictMode>
                <Layout>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                    </Routes>
                </Layout>
            </React.StrictMode>
        </div>
    </HashRouter>
    
);


