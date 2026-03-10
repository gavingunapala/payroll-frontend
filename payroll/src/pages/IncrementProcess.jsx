import React, { useState } from 'react';
import '../css/IncrementProcess.css';

export default function IncrementProcess() {
const [isRunning, setIsRunning] = useState(false);

return (
<div className="content-wrapper">

  <div className="header-bar">
    <span className="header-title">Process Module - Annual Increment</span>
    <div className="search-box">
      <span className="search-text">Officer Search... 🔍</span>
    </div>
  </div>

  <div className="main-area">
    <div className="process-card">
      <div className="card-header">Run Annual Increment Process</div>
      
      <div className="card-body">
        <div className="field-row">
          <label className="label">Select Process Period</label>
          <div className="input-group">
            <span className="small-label">Year</span>
            <input type="text" className="small-input" defaultValue="2026" />
            <span className="small-label">Month</span>
            <input type="text" className="small-input" defaultValue="03" />
          </div>
        </div>

        <div className="status-box">
          <div className="status-row">
            <span>System Date:</span>
            <strong>09/03/2026</strong>
          </div>
          <div className="status-row">
            <span>Eligible Records:</span>
            <span className="status-highlight">412 Officers</span>
          </div>
        </div>

        <div className="console">
          <div className="log-text">[System] Ready to update pay scales...</div>
          {isRunning && (
            <>
              <div className="log-text">[Action] Fetching eligible service numbers...</div>
              <div className="log-text">[Update] Applying rank-based increments...</div>
              <div className="log-progress">Processing: 88%</div>
            </>
          )}
        </div>

        <div className="button-row">
          <button 
            className={isRunning ? "btn-disabled" : "btn-run"} 
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            {isRunning ? 'Processing...' : 'Run Increment'}
          </button>
          <button className="btn-cancel" onClick={() => setIsRunning(false)}>Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <div className="sys-footer">
    All Right receved 2026- information technology unit
  </div>
</div>
);
}