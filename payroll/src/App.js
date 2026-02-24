import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import Login from './pages/login';
import Signup from './pages/signup';
import AppShell from './pages/AppShell';
import Dashboard from './pages/Dashboard';
import AdminUsers from './pages/AdminUsers';
import Footer from './components/Footer';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column">
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="ums/users" element={<AdminUsers />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
