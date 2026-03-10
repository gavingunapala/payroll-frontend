import React from "react";
import "../css/common.css";
import "../css/employee.css";

export default function EmpServiceDetails() {
  
  // Industry standard handler for "Enter" key submission
  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Service Details Submitted:", data);
  };

  return (
    <form onSubmit={handleServiceSubmit}>
      <div className="form-grid-3">
        <div className="field-group">
          <label className="field-label">
            Enlisted Date <span className="required">*</span>
          </label>
          <input type="date" defaultValue="2026-02-18" className="input" name="enlistedDate" />
        </div>

        <div className="field-group">
          <label className="field-label">Increment Date</label>
          <input type="date" defaultValue="2026-02-18" className="input" name="incrementDate" />
        </div>

        <div className="field-group">
          <label className="field-label">Expected Retirement</label>
          <input type="date" defaultValue="2026-02-18" className="input" name="expectedRetirement" />
        </div>

        <div className="field-group">
          <label className="field-label">Cadet Number</label>
          <input type="text" className="input" name="cadetNumber" />
        </div>

        <div className="field-group">
          <label className="field-label">Posting/Attachment</label>
          <input type="text" className="input" name="postingAttachment" />
        </div>

        <div className="field-group">
          <label className="field-label">
            Formation <span className="required">*</span>
          </label>
          <input type="text" className="input" name="formation" />
        </div>

        <div className="field-group">
          <label className="field-label">TA Number</label>
          <input type="text" className="input" name="taNumber" />
        </div>

        <div className="field-group">
          <label className="field-label">Living IN/Out</label>
          <input type="text" className="input" name="livingInOut" />
        </div>

        <div className="field-group">
          <label className="field-label">
            Station <span className="required">*</span>
          </label>
          <input type="text" className="input" name="station" />
        </div>

        <div className="field-group">
          <label className="field-label">GCB</label>
          <input type="text" className="input" name="gcb" />
        </div>
      </div>

      {/* Hidden submit button to ensure 'Enter' triggers the form in all browsers */}
      <button type="submit" style={{ display: "none" }} aria-hidden="true" />
    </form>
  );
}