import React from 'react';

export default function EmployeeProfile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee Profile</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Employee ID</label>
                    <input type="text" className="form-control" placeholder="Enter Employee ID" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">NIC Number</label>
                    <input type="text" className="form-control" placeholder="Enter NIC Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option value="">Select Department</option>
                      <option value="admin">Administration</option>
                      <option value="operations">Operations</option>
                      <option value="technical">Technical</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input type="text" className="form-control" placeholder="Enter Designation" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Joining</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="btn btn-primary me-2">Save</button>
                  <button className="btn btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
