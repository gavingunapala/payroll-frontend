import React, { useState } from 'react';
import '../css/EdScreen.css';

export default function EdScreen() {
const [monthType, setMonthType] = useState('current');

return (
<div className="ed-screen-wrapper">
<header className="header-bar">
<span className="header-title">Service Personal Profile - Sri Lanka Air Force</span>
<div className="search-box">
<span className="search-text">Officer Search... 🔍</span>
</div>
</header>

  <div className="filter-section">
    <div className="left-filter-group">
      <div className="radio-group">
        <label className="radio-label">
          <input 
            type="radio" 
            name="month" 
            checked={monthType === 'current'} 
            onChange={() => setMonthType('current')} 
          /> Current Month
        </label>
        <label className="radio-label">
          <input 
            type="radio" 
            name="month" 
            checked={monthType === 'previous'} 
            onChange={() => setMonthType('previous')} 
          /> Previous
        </label>
      </div>

      <div className="service-row">
        <label className="label-bold">Service Number</label>
        <input type="text" className="service-input" />
      </div>

      <div className="summary-labels-row">
        <span className="summary-item">Total Earning: <span className="val-text">lblTotEarning</span></span>
        <span className="summary-item">Total Deduction: <span className="val-text">lblTotDeduction</span></span>
        <span className="summary-item">Net Pay: <span className="val-text">lblNetPay</span></span>
        <span className="summary-item">Current Pay Unit: <span className="val-text">lblCurrPayUnit</span></span>
      </div>
    </div>

    <div className="recovery-box">
      <div className="recovery-row">
        <span>W & OP Recovery Total :</span>
        <span className="val-text">0.00</span>
      </div>
      <div className="recovery-row">
        <span>W & OP (Old Svc) :</span>
        <span className="val-text">0.00</span>
      </div>
    </div>
  </div>

  <div className="tabs-container">
    <div className="active-tab">ED Information</div>
  </div>

  <div className="table-container">
    <table className="ed-table">
      <thead>
        <tr>
          <th>Item Code</th>
          <th>Description</th>
          <th>Earnings</th>
          <th>Deductions</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="5" className="empty-row">No records found for selected month</td>
        </tr>
      </tbody>
    </table>
  </div>

  <footer className="sys-footer">
    All Right received 2026 - information technology unit
  </footer>
</div>
);
}