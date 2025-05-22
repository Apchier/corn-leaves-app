import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import DetectionLayout from "./components/layouts/DetectionLayout"; // layout untuk /detection
import DashboardLayout from "./components/layouts/DashboardLayout"; // layout untuk /dashboard
import AuthLayout from "./components/layouts/AuthLayout";

import HomePage from "./pages/home/HomePage";
import DetectionPage from "./pages/home/DetectionPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HistoryPage from './pages/history/HistoryPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/detection",
    element: <DetectionLayout />,
    children: [
      {
        index: true,
        element: <DetectionPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/history',
    element: <HistoryPage />,  
  },
]);