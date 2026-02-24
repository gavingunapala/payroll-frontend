import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

export default function AppShell() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="d-flex h-100">
      <SideNav user={user} onLogout={handleLogout} />
      <section className="flex-grow-1 h-100 overflow-auto bg-light">
        <div className="container-fluid py-3">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

