import React from 'react';
import '../css/WaterElectricity.css';

export default function WaterElectricity() {
  const months = [
    ['January', 'July'],
    ['February', 'August'],
    ['March', 'September'],
    ['April', 'October'],
    ['May', 'November'],
    ['June', 'December']
  ];

  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Water Electricity</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Selection Section */}
      <div className="top-section">
        <div className="field-row">
          <label className="label">Item</label>
          <input type="text" className="input-small" />
        </div>
        <div className="field-row">
          <label className="label">Authority</label>
          <input type="text" className="input-small" />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="main-layout">
        <div className="form-area">
          {/* Service No Row */}
          <div className="service-no-row">
            <label className="label">Service No</label>
            <input type="text" className="input-small" />
            <input type="text" className="input-small" />
          </div>

          <div className="flex-container">
            {/* Checkboxes Column */}
            <div className="checkbox-section">
              <div className="sub-title">Check Eligible Months</div>
              <div className="month-grid">
                {months.map((pair, idx) => (
                  <div key={idx} className="month-row">
                    <div className="check-item">
                      <input type="checkbox" /> <span className="month-text">{pair[0]}</span>
                    </div>
                    <div className="check-item">
                      <input type="checkbox" /> <span className="month-text">{pair[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Month/Amount Table */}
            <div className="table-section">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="table-th">Month</th>
                    <th className="table-th">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty rows to match the height */}
                  {[...Array(10)].map((_, i) => (
                    <tr key={i}><td className="table-td">&nbsp;</td><td className="table-td">&nbsp;</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <div className="delete-group">
            <input type="checkbox" id="delRec" />
            <label htmlFor="delRec" className="delete-label">Delete Records</label>
          </div>
          <button className="action-btn">Delete</button>
          
          <div className="spacer-60"></div>
          
          <button className="action-btn">Reset</button>
          <button className="action-btn">Back</button>
        </div>
      </div>

    </div>
  );
}