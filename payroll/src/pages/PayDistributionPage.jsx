import React, { useState } from 'react';
import '../css/common.css';
import '../css/pay-distribution.css';

export default function PayDistribution() {
  const [activeBankTab, setActiveBankTab] = useState(1);
  const [employeeType, setEmployeeType] = useState('Regular');

  // Logic: Disable "Eligible To" if "Regular" is selected
  const isEligibleToDisabled = employeeType === 'Regular';

  return (
    <div className="container">
      {/* Search Header Row */}
      <div className="header-row">
        <div className="section-title">Pay Distribution</div>
        <div className="search-group">
          <input type="text" placeholder="Officer Search..." className="search-input" />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="section-card">
        <div className="form-grid-3">
          {/* Row 1: Ref and Search */}
          <div className="field-group">
            <label className="field-label">Ref No</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <input type="text" className="input" />
              <button className="btn btn-blue-sm">SEARCH BATCH/ITEMS</button>
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Type</label>
            <div className="radio-container">
              <label>
                <input 
                  type="radio" 
                  name="type" 
                  value="Regular" 
                  checked={employeeType === 'Regular'} 
                  onChange={(e) => setEmployeeType(e.target.value)} 
                /> Regular
              </label>
              <label>
                <input 
                  type="radio" 
                  name="type" 
                  value="Volunteer" 
                  checked={employeeType === 'Volunteer'} 
                  onChange={(e) => setEmployeeType(e.target.value)} 
                /> Volunteer
              </label>
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Service Number</label>
            <input type="text" className="input" />
          </div>

          {/* Row 2: Rank and Name */}
          <div className="field-group">
            <label className="field-label">Rank</label>
            <input type="text" className="input" />
          </div>
          <div className="field-group" style={{ gridColumn: 'span 2' }}>
            <label className="field-label">Name</label>
            <input type="text" className="input" />
          </div>
        </div>

        {/* Eligibility Sub-section */}
        <div className="sub-header">Eligibility & Cash Details</div>
        <div className="form-grid-3">
          <div className="field-group">
            <label className="field-label">Case/PayMode Eligible From</label>
            <input type="date" className="input" />
          </div>
          <div className="field-group">
            <label className="field-label">Case/Payment Mode Eligible To</label>
            <input 
                type="date" 
                className="input" 
                disabled={isEligibleToDisabled} 
            />
          </div>
          <div className="field-group">
            <label className="field-label">Payment Mode</label>
            <select className="select"><option>Bank</option></select>
          </div>
          <div className="field-group">
            <label className="field-label">Cash Use Status</label>
            <select className="select"><option>No</option></select>
          </div>
          <div className="field-group">
            <label className="field-label">Cash Pay Value</label>
            <input type="text" defaultValue="0.00" className="input" />
          </div>
          <div className="field-group">
            <label className="field-label">Status</label>
            <input type="text" defaultValue="Active" className="input" />
          </div>
        </div>
      </div>

      {/* Bank Details Tabs Section */}
      <div className="tabs-container">
        {[1, 2, 3, 4, 5].map((num) => (
          <div 
            key={num}
            className={`tab ${activeBankTab === num ? 'active' : ''}`}
            onClick={() => setActiveBankTab(num)}
          >
            Bank {num}
          </div>
        ))}
      </div>

      <div className="tab-content">
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="field-group"><label className="field-label">Bank Use Status</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Pay Value</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Bank</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Branch</label><input type="text" className="input" /></div>
            <div className="field-group" style={{ gridColumn: 'span 2' }}><label className="field-label">Account No</label><input type="text" className="input" /></div>
          </div>
          
          {/* Side Action Buttons */}
          <div className="side-buttons">
            <button className="btn btn-green">ADD</button>
            <button className="btn btn-sky">EDIT</button>
            <button className="btn btn-red">DELETE</button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="footer-row">
        <button className="btn btn-red">RESET</button>
        <button className="btn btn-success">BACK</button>
      </div>
      
      <div className="sys-footer">All Right reserved 2026 - information technology unit</div>
    </div>
  );
}