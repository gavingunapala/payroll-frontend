import React, { useState, useEffect } from 'react';
import { employeeService } from '../services/employeeService';

export default function EmployeeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await employeeService.getAllEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchEmployees();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const searchParams = {
        [searchBy]: searchTerm
      };
      const data = await employeeService.searchEmployees(searchParams);
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee Search</h4>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-4">
                  <label className="form-label">Search By</label>
                  <select 
                    className="form-select" 
                    value={searchBy} 
                    onChange={(e) => setSearchBy(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="id">Employee ID</option>
                    <option value="department">Department</option>
                    <option value="nic">NIC Number</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Search Term</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">&nbsp;</label>
                  <div>
                    <button 
                      className="btn btn-primary w-100" 
                      onClick={handleSearch}
                      disabled={loading}
                    >
                      {loading ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : employees.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center">No employees found</td>
                      </tr>
                    ) : (
                      employees.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.id}</td>
                          <td>{employee.name}</td>
                          <td>{employee.department}</td>
                          <td>{employee.designation}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-1">View</button>
                            <button className="btn btn-sm btn-outline-secondary">Edit</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
