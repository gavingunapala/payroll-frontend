import React from 'react';
import '../css/SupplementaryPay.css';

export default function SupplementaryPay() {
  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Supplementary Pay Schedule</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Filter Section */}
      <div className="top-filter-section">
        <div className="field-row">
          <label className="label">Select The Year and Month</label>
          <div className="input-group">
            <span className="small-label">Year</span>
            <input type="text" className="small-input" defaultValue="2026" />
            <span className="small-label">Month</span>
            <input type="text" className="small-input" defaultValue="03" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-layout">
        <div className="form-area">
          {/* Service No and Item List Section */}
          <div className="top-row">
            <div className="field-row">
              <label className="label">Service No</label>
              <input type="text" className="input-medium" />
              <div className="info-box"></div>
            </div>
            
            <div className="item-list-container">
              <div className="item-header">Supplementary Item Codes</div>
              <div className="list-box">
                {/* Items like Arrears, Bonus, or Special Allowances */}
              </div>
            </div>
          </div>

          {/* Payment Details Form */}
          <div className="bordered-section">
            <div className="form-grid">
              <div className="column">
                <div className="field-row"><label className="f-label">Item Code</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Description</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Amount</label><input type="text" className="input-bold" /></div>
              </div>

              <div className="column">
                <div className="field-row"><label className="f-label">Authority</label><input type="text" className="input-large" /></div>
                <div className="field-row"><label className="f-label">Effective Date</label><input type="date" className="input" /></div>
                <div className="field-row"><label className="f-label">Taxable</label>
                  <select className="select">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Remarks Section */}
          <div className="remarks-section">
            <label className="f-label">Reason for Supplementary Payment</label>
            <textarea className="textarea" placeholder="Enter justification..."></textarea>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <div className="delete-group">
            <input type="checkbox" id="delSupp" />
            <label htmlFor="delSupp" className="delete-label">Delete Records</label>
          </div>
          <button className="action-btn">Delete</button>
          
          <div className="spacer-80"></div>
          
          <button className="action-btn">Reset</button>
          <button className="action-btn">Back</button>
        </div>
      </div>

  
    </div>
  );
}