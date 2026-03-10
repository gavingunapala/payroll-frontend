import React, { useState } from "react";
import "../css/common.css";
import "../css/employee.css";

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState("service");

  const tabNames = {
    service: "Service Details",
    status: "Employee Status", 
    salary: "Salary Information"
  };

  // Industry standard handler using FormData
  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Employee Information Submitted:", data);
  };

  return (
    <div className="container">
      {/* Service Number Row */}
      <div className="service-number-row">
        <label className="field-label" style={{ marginBottom: 0 }}>
          Service Number <span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Service No."
          className="service-input"
        />
      </div>

      {/* Employee Information Section */}
      <div className="section-card">
        <div className="section-title" style={{ marginBottom: "15px" }}>
          Employee Information
        </div>

        {/* Form wrapper catches 'Enter' key automatically */}
        <form onSubmit={handleEmployeeSubmit}>
          <div className="form-grid-3">
            {/* Column 1 */}
            <div className="column">
              <div className="field-group">
                <label className="field-label">
                  Rank <span className="required">*</span>
                </label>
                <select className="select" name="rank">
                  <option>Select Rank</option>
                  <option value="officer">Officer</option>
                </select>
              </div>
              <div className="field-group">
                <label className="field-label">Initials</label>
                <input type="text" className="input" name="initials" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Surname <span className="required">*</span>
                </label>
                <input type="text" className="input" name="surname" />
              </div>
              <div className="field-group">
                <label className="field-label">Scheme Type</label>
                <input type="text" className="input" name="schemeType" />
              </div>
              <div className="field-group">
                <label className="field-label">Type</label>
                <input type="text" className="input" name="type" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Branch/Trade <span className="required">*</span>
                </label>
                <input type="text" className="input" name="branch" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Group <span className="required">*</span>
                </label>
                <input type="text" className="input" name="group" />
              </div>
              <div className="field-group">
                <label className="field-label">Other Name</label>
                <input type="text" className="input" name="otherName" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="column">
              <div className="field-group">
                <label className="field-label">Sex</label>
                <input type="text" className="input" name="sex" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Marriage Status <span className="required">*</span>
                </label>
                <input type="text" className="input" name="marriageStatus" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Date Of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  defaultValue="2026-02-18"
                  className="input"
                  name="dob"
                />
              </div>
              <div className="field-group">
                <label className="field-label">Religion</label>
                <input type="text" className="input" name="religion" />
              </div>
              <div className="field-group">
                <label className="field-label">Marriage Date</label>
                <input
                  type="text"
                  placeholder="mm/ dd/ yyyy"
                  className="input"
                  name="marriageDate"
                />
              </div>
              <div className="field-group">
                <label className="field-label">Nationality</label>
                <input type="text" className="input" name="nationality" />
              </div>
              <div className="field-group">
                <label className="field-label">Rent</label>
                <input type="text" className="input" name="rent" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="column">
              <div className="field-group">
                <label className="field-label">Land Phone No</label>
                <input type="text" className="input" name="landPhone" />
              </div>
              <div className="field-group">
                <label className="field-label">Mobile No</label>
                <input type="text" className="input" name="mobileNo" />
              </div>

              <div className="photo-area">
                <div className="photo-placeholder">
                  <span className="no-image-text">No Image Available</span>
                </div>
                {/* Changed to type="button" so it doesn't submit the form */}
                <button type="button" className="browse-btn">
                  Browse
                </button>
              </div>

              <div className="field-group">
                <label className="field-label">
                  Pay Unit <span className="required">*</span>
                </label>
                <input type="text" className="input" name="payUnit" />
              </div>
              <div className="field-group">
                <label className="field-label">Payment Mode</label>
                <input type="text" className="input" name="paymentMode" />
              </div>
              <div className="field-group">
                <label className="field-label">
                  Cost Center <span className="required">*</span>
                </label>
                <input type="text" className="input" name="costCenter" />
              </div>
            </div>
          </div>
          {/* Hidden submit button to ensure 'Enter' works on all browsers */}
          <button
            type="submit"
            style={{ display: "none" }}
            aria-hidden="true"
          />
        </form>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {Object.keys(tabNames).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tabNames[tab]}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "service" && (
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
        )}

        {activeTab !== "service" && (
          <div className="sys-footer" style={{ padding: "40px" }}>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Information
            Content
          </div>
        )}
      </div>
    </div>
  );
}
