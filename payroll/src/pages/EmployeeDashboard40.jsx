import React, { useState } from 'react';
import '../css/PayCalculator.css';

export default function PayCalculator() {
  const [monthSelection, setMonthSelection] = useState('current');

  return (
    <div className="pay-calc-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Service Personal Profile - Sri Lanka Air Force</span>
        <div className="search-box">
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Filter & Summary Section */}
      <div className="filter-section">
        <div className="top-row">
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="month" 
                checked={monthSelection === 'current'} 
                onChange={() => setMonthSelection('current')} 
              /> Current Month
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="month" 
                checked={monthSelection === 'previous'} 
                onChange={() => setMonthSelection('previous')} 
              /> Previous
            </label>
          </div>

          <div className="year-month-group">
            <span className="label-bold">Select The Year and Month</span>
            <div className="input-align">
              <span className="small-label">Year</span>
              <input type="text" className="small-input" />
              <span className="small-label">Month</span>
              <input type="text" className="small-input" />
            </div>
          </div>
        </div>

        <div className="service-row">
          <div className="field-item">
            <label className="label-bold">Service Number</label>
            <input type="text" className="service-input" />
          </div>
          <span className="officer-name">SGT AMARASINGHE</span>
        </div>

        {/* Calculation Summary Bar */}
        <div className="summary-bar">
          <div className="summary-item">
            <span className="sum-label">Total Earning</span> 
            <span className="sum-val">=40%</span>
          </div>
          <div className="summary-item">
            <span className="sum-label">Total Deduction</span> 
            <span className="sum-val">40% Balance</span>
          </div>
          <div className="summary-item">
            <span className="sum-label">Net Pay</span> 
            <span className="sum-val">0.00</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-wrapper">
        <div className="table-tab">Deduction Percentage | lblPayPercentage</div>
        <div className="table-container">
          <table className="pay-table">
            <thead>
              <tr>
                <th>Pay Unit</th>
                <th>Rank</th>
                <th>CostCenter</th>
                <th>ItemCode</th>
                <th>Description</th>
                <th>TotAmount</th>
                <th>Authority</th>
                <th>BankCode</th>
                <th>BranchCode</th>
                <th>AccountNo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10" className="empty-row">No calculation data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* System Footer */}
      <div className="sys-footer">All Right receved 2026- information technology unit</div>
    </div>
  );
}