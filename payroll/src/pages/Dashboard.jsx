import React from 'react';
import { useAppSelector } from '../store/hooks';

export default function Dashboard() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h5 className="mb-2">Dashboard</h5>
      {isAuthenticated && user && (
        <div className="alert alert-success mb-3">
          {user.role === 'user' ? (
            <>
              Welcome to Payroll System of Sri Lanka Air Force!
              <br />
              <small className="text-muted">Logged in as: <strong>{user.username}</strong></small>
            </>
          ) : (
            <>
              Welcome back, <strong>{user.username}</strong>! 
              <br />
              <small className="text-muted">Role: {user.role} | Email: {user.email}</small>
            </>
          )}
        </div>
      )}
      <p className="mb-0 text-muted">
        {user?.role === 'user' 
          ? 'Your payroll information and services are available through the navigation menu.'
          : 'Select a module from the left side navigation.'
        }
      </p>
    </div>
  );
}

