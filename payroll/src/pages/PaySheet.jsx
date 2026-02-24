import React, { useState } from 'react';

export default function PaySheet() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const mockPayData = [
    { id: 'EMP001', name: 'John Doe', basic: 50000, allowance: 10000, deduction: 5000, net: 55000 },
    { id: 'EMP002', name: 'Jane Smith', basic: 45000, allowance: 8000, deduction: 4000, net: 49000 },
    { id: 'EMP003', name: 'Mike Johnson', basic: 60000, allowance: 12000, deduction: 6000, net: 66000 },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Pay Sheet</h4>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-3">
                  <label className="form-label">Month</label>
                  <select 
                    className="form-select" 
                    value={selectedMonth} 
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="">Select Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Year</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">&nbsp;</label>
                  <div>
                    <button className="btn btn-primary w-100">Generate</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">&nbsp;</label>
                  <div>
                    <button className="btn btn-success w-100">Export</button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Basic Salary</th>
                      <th>Allowances</th>
                      <th>Deductions</th>
                      <th>Net Salary</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPayData.map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>Rs. {employee.basic.toLocaleString()}</td>
                        <td>Rs. {employee.allowance.toLocaleString()}</td>
                        <td>Rs. {employee.deduction.toLocaleString()}</td>
                        <td><strong>Rs. {employee.net.toLocaleString()}</strong></td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-1">Payslip</button>
                          <button className="btn btn-sm btn-outline-secondary">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="table-secondary">
                    <tr>
                      <th colSpan="2">Total</th>
                      <th>Rs. {mockPayData.reduce((sum, emp) => sum + emp.basic, 0).toLocaleString()}</th>
                      <th>Rs. {mockPayData.reduce((sum, emp) => sum + emp.allowance, 0).toLocaleString()}</th>
                      <th>Rs. {mockPayData.reduce((sum, emp) => sum + emp.deduction, 0).toLocaleString()}</th>
                      <th>Rs. {mockPayData.reduce((sum, emp) => sum + emp.net, 0).toLocaleString()}</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
