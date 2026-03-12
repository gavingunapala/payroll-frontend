import React, { useState } from 'react';
import '../css/PrintBatch.css';

export default function PrintBatch() {
  const [schemaType, setSchemaType] = useState('Regular');
  const [viewType, setViewType] = useState('View All');

  return (
    <div className="content-wrapper">
      {/* Header Bar */}
      <div className="header-bar">
        <div className="header-title">Print Batch</div>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Filter Options Section */}
      <div className="filter-section">
        <div className="filter-row">
          <div className="group">
            <span className="label-bold">Shcema Type</span>
            <label className="radio-label">
              <input type="radio" name="schema" checked={schemaType === 'Regular'} onChange={() => setSchemaType('Regular')} /> Regular
            </label>
            <label className="radio-label">
              <input type="radio" name="schema" checked={schemaType === 'Volunteer'} onChange={() => setSchemaType('Volunteer')} /> Volunteer
            </label>
          </div>

          <div className="group-vertical">
            <label className="radio-label">
              <input type="radio" name="view" checked={viewType === 'View All'} onChange={() => setViewType('View All')} /> View All
            </label>
            <div className="input-align">
              <label className="radio-label">
                <input type="radio" name="view" checked={viewType === 'Created User'} onChange={() => setViewType('Created User')} /> Search By Created User
              </label>
              <input type="text" className="small-input" />
            </div>
            <div className="input-align">
              <label className="radio-label">
                <input type="radio" name="view" checked={viewType === 'Created Date'} onChange={() => setViewType('Created Date')} /> Search By Created Date
              </label>
              <input type="text" className="small-input" />
            </div>
          </div>

          <div className="search-action">
            <span className="other-report-text">Other Batch Report</span>
            <button className="btn-classic">Search</button>
          </div>
          
          <div className="group" style={{marginLeft: 'auto'}}>
            <input type="checkbox" className="checkbox-margin" />
            <span className="label-bold">Correction Date</span>
          </div>
        </div>
      </div>

      {/* Main Empty Area */}
      <div className="table-area"></div>

      {/* RE-DESIGNED SINGLE ROW FOOTER */}
      <div className="blue-footer">
        <div className="footer-content">
          <div className="left-btns">
            <button className="btn-classic">Check All</button>
            <button className="btn-classic">Uncheck</button>
          </div>
          
          <span className="copy-text">
           
          </span>
          
          <div className="right-btns">
            <button className="btn-classic">View Transactions</button>
            <button className="btn-classic">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
}