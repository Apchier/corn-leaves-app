import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/home/HomePage'
import DetectionPage from './pages/detection/DetectionPage'
import DiseaseInfoPage from './pages/disease-info/DiseaseInfoPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'detection',
                element: <DetectionPage />
            },
            {
                path: 'disease-info',
                element: <DiseaseInfoPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
])
