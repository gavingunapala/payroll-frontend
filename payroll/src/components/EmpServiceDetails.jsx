import React from "react";
import "../css/common.css";
import "../css/employee.css";

export default function EmpServiceDetails() {
  return (
    <div className="form-grid-3">
      <div className="field-group">
        <label className="field-label">
          Enlisted Date <span className="required">*</span>
        </label>
        <input type="date" defaultValue="2026-02-18" className="input" />
      </div>
      {/* ... other service info fields ... */}
      <div className="field-group">
        <label className="field-label">Increment Date</label>
        <input type="date" defaultValue="2026-02-18" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">Expected Retirement</label>
        <input type="date" defaultValue="2026-02-18" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">Cadet Number</label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">Posting/Attachment</label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">
          Formation <span className="required">*</span>
        </label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">TA Number</label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">Living IN/Out</label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">
          Station <span className="required">*</span>
        </label>
        <input type="text" className="input" />
      </div>
      <div className="field-group">
        <label className="field-label">GCB</label>
        <input type="text" className="input" />
      </div>
    </div>
  );
}