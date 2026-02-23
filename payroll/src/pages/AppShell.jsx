import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';

export default function AppShell() {
  return (
    <div className="d-flex h-100">
      <SideNav />
      <section className="flex-grow-1 h-100 overflow-auto bg-light">
        <div className="container-fluid py-3">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

