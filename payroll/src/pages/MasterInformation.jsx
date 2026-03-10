import React, { useState } from 'react';
import '../css/MasterInformation.css';

export default function MasterInformation() {
  // Fixed: Set default state to the exact full name of the tab
  const [activeTab, setActiveTab] = useState('Service Information');

  return (
    <div className="content-wrapper">
      {/* Header Bar */}
      <div className="header-bar">
        <span className="header-title">Service Personal Profile - Sri Lanka Air Force</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Service Number Input */}
      <div className="service-number-row">
        <label className="label">Service Number</label>
        <input type="text" placeholder="Enter Service No." className="service-input" />
      </div>

      {/* Main Profile Form */}
      <div className="form-container">
        <div className="form-grid">
          {/* Column 1 */}
          <div className="column">
            {['Rank', 'Initials', 'Surname', 'Shema Type', 'Type', 'Branch/Trade', 'Group', 'Other name'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input" />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="column">
            {['Sex', 'Marrige Status', 'DOB', 'Religion', 'Marrige Date', 'Nationalty', 'Rent'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input" />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="column">
            <div className="field-row">
              <label className="field-label">Land Phone NO</label>
              <input type="text" className="input" />
            </div>
            <div className="field-row">
              <label className="field-label">Mobile No</label>
              <input type="text" className="input" />
            </div>
            
            <div className="photo-container">
              <div className="photo-box">No Image</div>
              <button className="browse-btn">Browse</button>
            </div>

            {['Pay Unit', 'Payment Mode', 'Cost Center'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="tabs-container">
        {['Service Information', 'Status Information', 'Salary Information'].map(tab => (
          <div 
            key={tab}
            // Fixed: Cleaned up the active class logic
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="tab-content">
        <div className="service-grid">
          <div className="field-row"><label className="field-label">Enlisted Date</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Increment Date</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Expected Retirement</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Posting/Attachment</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Cadet Number</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Living IN/Out</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">TA Number</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">GCB</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Station</label><input type="text" className="input" /></div>
          <div className="field-row"><label className="field-label">Formation</label><input type="text" className="input" /></div>
        </div>
      </div>
    </div>
  );
}