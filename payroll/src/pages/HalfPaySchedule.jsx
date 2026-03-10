import React from 'react';
import '../css/HalfPaySchedule.css';

export default function HalfPaySchedule() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="content-wrapper">
      <div className="header-bar">
        <span className="header-title">Half Pay Schedule</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      <div className="top-filter-section">
        <div className="field-row">
          <label className="label">Select The Year and Month</label>
          <div className="input-group">
            <span className="small-label">Year</span>
            <input type="text" className="small-input" defaultValue="2021" />
            <span className="small-label">Month</span>
            <input type="text" className="small-input" defaultValue="10" />
          </div>
        </div>
      </div>

      <div className="main-layout">
        <div className="form-area">
          <div className="service-row">
            <div className="field-row">
              <label className="label">Service No</label>
              <input type="text" className="input-medium" />
              <div className="info-box"></div>
            </div>
          </div>

          <div className="days-container">
            <div className="days-header">Half Pay Days</div>
            <div className="days-grid">
              {days.map(day => (
                <div key={day} className="day-item">
                  <input type="checkbox" id={`day-${day}`} />
                  <label htmlFor={`day-${day}`} className="day-label">{day}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-section">
            <div className="field-row">
              <label className="label">Total Days</label>
              <input type="text" className="input-small" />
            </div>
            <div className="field-row">
              <label className="label">Authority</label>
              <input type="text" className="input-large" />
            </div>
          </div>
        </div>

        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <div className="delete-group">
            <input type="checkbox" id="delCheck" />
            <label htmlFor="delCheck" className="delete-label">Delete Records</label>
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