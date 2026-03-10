import React, { useState, useRef } from "react"; // Added useRef
import "../css/common.css";
import "../css/employee.css";
import EmpServiceDetails from "../components/EmpServiceDetails";
import EmpStatusDetails from "../components/EmpStatusDetails";
import EmpSalaryDetails from "../components/EmpSalaryDetails";
import { employeeService } from "../services/employeeService";

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState("service");
  const [serviceNumber, setServiceNumber] = useState("");
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // --- New State and Ref for Image ---
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const tabNames = {
    service: "Service Details",
    status: "Employee Status", 
    salary: "Salary Information"
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger hidden input when Browse is clicked
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleServiceNumberSearchChange = async (e) => {
    const value = e.target.value;
    setServiceNumber(value);
    setEmployeeData(null);
    setError("");
    
    if (value.length >= 3) {
      setLoading(true);
      try {
        const data = await employeeService.getEmployeeById(value);
        setEmployeeData(data);
      } catch (err) {
        setError(err.message || "Employee not found");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Manually add image file to submission data
    if (fileInputRef.current?.files[0]) {
      formData.append("profileImage", fileInputRef.current.files[0]);
    }

    // Convert FormData to object for updateEmployee service
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Use employeeService to update employee
      const result = await employeeService.updateEmployee(serviceNumber, data);
      console.log("Employee updated successfully:", result);
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Error updating employee data: " + (error.message || "Unknown error"));
    }
  };

  return (
    <div className="container">
      <div className="service-number-row">
        <label className="field-label" style={{ marginBottom: 0 }}>
          Service Number <span className="required">*</span>
        </label>
        <div className="service-input-wrapper">
          <input
            type="text"
            placeholder="Enter Service No."
            className="service-input"
            value={serviceNumber}
            onChange={handleServiceNumberSearchChange}
          />
          {loading && <span className="loading-indicator">Loading...</span>}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="section-card">
        <div className="section-title" style={{ marginBottom: "15px" }}>
          Employee Information
        </div>

        <form onSubmit={handleEmployeeSubmit}>
          <div className="form-grid-3">
            {/* Column 1 */}
            <div className="column">
              <div className="field-group">
                <label className="field-label">Rank <span className="required">*</span></label>
                <select className="select" name="rank" >
                  <option>Select Rank</option>
                  <option value="officer">Officer</option>
                </select>
              </div>
              <div className="field-group">
                <label className="field-label">Initials</label>
                <input type="text" className="input" name="initials" />
              </div>
              <div className="field-group">
                <label className="field-label">Surname <span className="required">*</span></label>
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
                <label className="field-label">Branch/Trade <span className="required">*</span></label>
                <input type="text" className="input" name="branch" />
              </div>
              <div className="field-group">
                <label className="field-label">Group <span className="required">*</span></label>
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
                <label className="field-label">Marriage Status <span className="required">*</span></label>
                <input type="text" className="input" name="marriageStatus" />
              </div>
              <div className="field-group">
                <label className="field-label">Date Of Birth <span className="required">*</span></label>
                <input type="date" defaultValue="2026-02-18" className="input" name="dob" />
              </div>
              <div className="field-group">
                <label className="field-label">Religion</label>
                <input type="text" className="input" name="religion" />
              </div>
              <div className="field-group">
                <label className="field-label">Marriage Date</label>
                <input type="date" defaultValue="2026-02-18" className="input" name="marriageDate" />
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

              {/* IMAGE PART ADDED HERE */}
              <div className="photo-area">
                <div className="photo-placeholder">
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Profile Preview" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  ) : (
                    <span className="no-image-text">No Image Available</span>
                  )}
                </div>
                
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/*" 
                  style={{ display: "none" }} 
                />

                <button 
                  type="button" 
                  className="browse-btn" 
                  onClick={handleBrowseClick}
                >
                  Browse
                </button>
              </div>

              <div className="field-group">
                <label className="field-label">Pay Unit <span className="required">*</span></label>
                <input type="text" className="input" name="payUnit" />
              </div>
              <div className="field-group">
                <label className="field-label">Payment Mode</label>
                <input type="text" className="input" name="paymentMode" />
              </div>
              <div className="field-group">
                <label className="field-label">Cost Center <span className="required">*</span></label>
                <input type="text" className="input" name="costCenter" />
              </div>
            </div>
          </div>
          <button type="submit" style={{ display: "none" }} aria-hidden="true" />
        </form>
      </div>

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

      <div className="tab-content">
        {activeTab === "service" && <EmpServiceDetails />}
        {activeTab === "status" && <EmpStatusDetails />}
        {activeTab === "salary" && <EmpSalaryDetails />}
      </div>
    </div>
  );
}