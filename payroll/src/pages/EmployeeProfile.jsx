import React, { useState } from 'react';
import '../css/common.css';
import '../css/employee.css'; 

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div className="container">
      {/* Service Number Row */}
      <div className="service-number-row">
        <label className="field-label" style={{marginBottom: 0}}>Service Number <span className="required">*</span></label>
        <input type="text" placeholder="Enter Service No." className="service-input" />
      </div>

      {/* Employee Information Section */}
      <div className="section-card">
        <div className="section-title" style={{marginBottom: '15px'}}>Employee Information</div>
        
        <div className="form-grid-3">
          {/* Column 1 */}
          <div className="column">
            <div className="field-group">
              <label className="field-label">Rank <span className="required">*</span></label>
              <select className="select">
                <option>Select Rank</option>
              </select>
            </div>
            <div className="field-group"><label className="field-label">Initials</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Surname <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Scheme Type</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Type</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Branch/Trade <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Group <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Other Name</label><input type="text" className="input" /></div>
          </div>

          {/* Column 2 */}
          <div className="column">
            <div className="field-group"><label className="field-label">Sex</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Marriage Status <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Date Of Birth <span className="required">*</span></label><input type="date" defaultValue="2026-02-18" className="input" /></div>
            <div className="field-group"><label className="field-label">Religion</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Marriage Date</label><input type="text" placeholder="mm/ dd/ yyyy" className="input" /></div>
            <div className="field-group"><label className="field-label">Nationality</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Rent</label><input type="text" className="input" /></div>
          </div>

          {/* Column 3 */}
          <div className="column">
            <div className="field-group"><label className="field-label">Land Phone No</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Mobile No</label><input type="text" className="input" /></div>
            
            <div className="photo-area">
              <div className="photo-placeholder">
                <span className="no-image-text">No Image Available</span>
              </div>
              <button className="browse-btn">Browse</button>
            </div>
            
            <div className="field-group"><label className="field-label">Pay Unit <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Payment Mode</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Cost Center <span className="required">*</span></label><input type="text" className="input" /></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {['service', 'status', 'salary'].map((tab) => (
          <div 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Information
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'service' && (
          <div className="form-grid-3">
            <div className="field-group"><label className="field-label">Enlisted Date <span className="required">*</span></label><input type="date" defaultValue="2026-02-18" className="input" /></div>
            <div className="field-group"><label className="field-label">Increment Date</label><input type="date" defaultValue="2026-02-18" className="input" /></div>
            <div className="field-group"><label className="field-label">Expected Retirement</label><input type="date" defaultValue="2026-02-18" className="input" /></div>
            <div className="field-group"><label className="field-label">Cadet Number</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Posting/Attachment</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Formation <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">TA Number</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Living IN/Out</label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">Station <span className="required">*</span></label><input type="text" className="input" /></div>
            <div className="field-group"><label className="field-label">GCB</label><input type="text" className="input" /></div>
          </div>
        )}
        
        {activeTab !== 'service' && (
          <div className="sys-footer" style={{padding: '40px'}}>
             {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Information Content
          </div>
        )}
      </div>

      <div className="sys-footer">All Right reserved 2026 - information technology unit</div>
    </div>
  );
}