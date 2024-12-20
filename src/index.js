import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/authpage';
import HomePage from './components/HomePage';
import ReportPage from './components/reportPage';
import ProfilePage from './components/profilePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
