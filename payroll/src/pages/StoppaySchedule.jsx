import React from 'react';
import '../css/StoppaySchedule.css';

export default function StoppaySchedule() {
  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Schedule Stop Payment</span>
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
          {/* Service No Row */}
          <div className="service-row">
            <div className="field-row">
              <label className="label">Service No</label>
              <input type="text" className="input-medium" />
              <div className="info-box"></div>
            </div>
          </div>

          {/* Stop Pay Details Section */}
          <div className="bordered-section">
            <div className="form-grid">
              <div className="column">
                <div className="field-row">
                  <label className="f-label">Stop Reason</label>
                  <select className="select">
                    <option>Select Reason</option>
                    <option>Deserted</option>
                    <option>Discharged</option>
                    <option>Deceased</option>
                    <option>Court Martial</option>
                  </select>
                </div>
                <div className="field-row">
                  <label className="f-label">Authority</label>
                  <input type="text" className="input-large" />
                </div>
              </div>

              <div className="column">
                <div className="field-row">
                  <label className="f-label">Stop From Date</label>
                  <input type="date" className="input" />
                </div>
                <div className="field-row">
                  <label className="f-label">Stop To Date</label>
                  <input type="date" className="input" />
                </div>
                <div className="field-row">
                  <label className="f-label">Status</label>
                  <input type="text" defaultValue="Active" className="input" />
                </div>
              </div>
            </div>
          </div>

          {/* Remarks Section */}
          <div className="remarks-section">
            <label className="f-label">Special Remarks</label>
            <textarea className="textarea"></textarea>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <div className="delete-group">
            <input type="checkbox" id="delStop" />
            <label htmlFor="delStop" className="delete-label">Delete Records</label>
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