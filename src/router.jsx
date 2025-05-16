import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import DetectionLayout from './components/layouts/DashboardLayout'
import AuthLayout from './components/layouts/AuthLayout'
import DetectionPage from './pages/home/DetectionPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/home/HomePage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ]
    },
    {
        path: '/detection',
        element: <DetectionLayout />,
        children: [
            {
                index: true,
                element: <DetectionPage />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
        ]
    }
])
