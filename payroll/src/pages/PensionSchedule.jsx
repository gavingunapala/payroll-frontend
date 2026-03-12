import React from 'react';
import '../css/PensionSchedule.css';

export default function PensionSchedule() {
  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Pension Schedule</span>
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
              <div className="item-header">Pension Item Codes</div>
              <div className="list-box">
                {/* Codes like W&OP, Commuted, etc would be listed here */}
              </div>
            </div>
          </div>

          {/* Pension Details Form */}
          <div className="bordered-section">
            <div className="form-grid">
              <div className="column">
                <div className="field-row"><label className="f-label">Item Code</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Description</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Amount</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Authority</label><input type="text" className="input" /></div>
              </div>

              <div className="column">
                <div className="field-row"><label className="f-label">Pension Type</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Effective Date</label><input type="date" className="input" /></div>
                <div className="field-row"><label className="f-label">End Date</label><input type="date" className="input" /></div>
                <div className="field-row"><label className="f-label">Status</label><input type="text" className="input" /></div>
              </div>
            </div>
          </div>

          {/* Bank Details for Pension */}
          <div className="bordered-section">
            <div className="form-grid">
              <div className="column">
                <div className="field-row"><label className="f-label">Bank Code</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Branch Code</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Account No</label><input type="text" className="input" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <div className="delete-group">
            <input type="checkbox" id="delPension" />
            <label htmlFor="delPension" className="delete-label">Delete Records</label>
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