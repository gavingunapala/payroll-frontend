import React, { useState } from 'react';
import '../css/ExceptionData.css';

export default function ExceptionData() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Service Personal Profile - Sri Lanka Air Force</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Service Number Row */}
      <div className="service-number-row">
        <label className="service-label">Service Number</label>
        <input type="text" placeholder="Enter Service No." className="service-input" />
      </div>

      {/* Main Profile Content */}
      <div className="profile-section">
        <div className="form-grid">
          {/* Column 1 */}
          <div className="column">
            {['Rank', 'Initials', 'Surname', 'Shema Type', 'Type', 'Branch/Trade', 'Group', 'Other name'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input-field" />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="column">
            {['Sex', 'Marrige Status', 'DOB', 'Religion', 'Marrige Date', 'Nationalty', 'Rent'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input-field" />
              </div>
            ))}
          </div>

          {/* Column 3 (Contact & Unit Info) */}
          <div className="column">
            <div className="field-row">
              <label className="field-label">Land Phone NO</label>
              <input type="text" className="input-field" />
            </div>
            <div className="field-row">
              <label className="field-label">Mobile No</label>
              <input type="text" className="input-field" />
            </div>

            <div className="photo-container">
              <div className="photo-box">No Image Available</div>
              <input type="text" className="input-field photo-input" />
            </div>

            {['Pay Unit', 'Payment Mode', 'Cost Center'].map(label => (
              <div key={label} className="field-row">
                <label className="field-label">{label}</label>
                <input type="text" className="input-field" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="custom-tabs-container">
        {['Service Information', 'Status Information', 'Salary Information'].map(tab => {
          const tabKey = tab.toLowerCase().split(' ')[0];
          return (
            <div
              key={tab}
              className={`custom-tab ${activeTab === tabKey ? 'active' : ''}`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tab}
            </div>
          );
        })}
      </div>

      {/* Tab Content (Service Info) */}
      <div className="custom-tab-content">
        <div className="service-grid">
          <div className="field-row"><label className="field-label">Enlisted Date</label><input type="text" className="input-field" /></div>
          <div className="field-row"><label className="field-label">Increment Date</label><input type="text" className="input-field" /></div>
          <div className="field-row"><label className="field-label">Expected Retirement</label><input type="text" className="input-field" /></div>

          <div className="field-row grid-col-span-2"><label className="field-label">Posting/Attachment</label><input type="text" className="input-field" /></div>

          <div className="field-row"><label className="field-label">Cadet Number</label><input type="text" className="input-field" /></div>
          <div className="field-row"><label className="field-label">Living IN/Out</label><input type="text" className="input-field" /></div>

          <div className="field-row"><label className="field-label">TA Number</label><input type="text" className="input-field" /></div>
          <div className="field-row"><label className="field-label">GCB</label><input type="text" className="input-field" /></div>

          <div className="field-row"><label className="field-label">Station</label><input type="text" className="input-field" /></div>
          <div className="field-row"><label className="field-label">Formation</label><input type="text" className="input-field" /></div>
        </div>
      </div>
    </div>
  );
}