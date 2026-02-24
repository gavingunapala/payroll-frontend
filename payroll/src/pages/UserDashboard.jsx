import React from 'react';
import { useAppSelector } from '../store/hooks';

export default function UserDashboard() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h5 className="mb-2">Dashboard</h5>
      {isAuthenticated && user && (
        <div className="alert alert-success mb-3">
          Welcome to Payroll System of Sri Lanka Air Force!
          <br />
          <small className="text-muted">Logged in as: <strong>{user.username}</strong></small>
        </div>
      )}
      <p className="mb-0 text-muted">
        Your payroll information and services are available through the navigation menu.
      </p>
    </div>
  );
}
