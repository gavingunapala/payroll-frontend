import React from 'react';
import '../css/LoanInformation.css';

export default function LoanInformation() {
  return (
    <div className="content-wrapper">
      {/* Blue Header Bar */}
      <div className="header-bar">
        <span className="header-title">Service Personal Profile - Sri Lanka Air Force</span>
        <div className="search-box">
          <span className="search-text">Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Section: Service Number and Item Code List */}
      <div className="top-section">
        <div className="service-row">
          <label className="label">Service Number</label>
          <input type="text" placeholder="Enter Service No." className="service-input" />
          <div className="small-box"></div>
        </div>

        <div className="item-code-list-container">
          <div className="item-code-header">Item Code</div>
          <div className="list-box">
            {/* List items would be mapped here */}
          </div>
        </div>
      </div>

      {/* Main Form Content with Sidebar Buttons */}
      <div className="main-layout">
        <div className="form-area">
          {/* General Loan Info */}
          <div className="section-grid">
            <div className="column">
              <div className="field-row"><label className="f-label">Short Description</label><input type="text" className="input" /></div>
              <div className="field-row"><label className="f-label">Long Description</label><input type="text" className="input" /></div>
              <div className="field-row">
                <label className="f-label">Shedule Start Date</label>
                <input type="text" defaultValue="2021/7/26" className="input" />
              </div>
              <div className="field-row"><label className="f-label">Is Gurantor</label><input type="text" className="input" /></div>
              <div className="field-row"><label className="f-label">Applicant No</label><input type="text" className="input" /></div>
            </div>

            <div className="column">
               <div className="field-row"><label className="f-label">Value Type</label><input type="text" className="input" /></div>
               <div className="field-row"><label className="f-label">Status</label><input type="text" className="input" /></div>
               <div className="field-row">
                 <label className="f-label">Shedule End Date</label>
                 <input type="text" defaultValue="2023/7/25" className="input" />
               </div>
               <div className="field-row"><label className="f-label">Authority</label><input type="text" className="input" /></div>
            </div>
          </div>

          {/* Interest & Installment Section */}
          <div className="bordered-section">
            <div className="section-grid">
              <div className="column">
                <div className="field-row"><label className="f-label">Interest Item Code</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Loan Amount</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Interest Date</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">No Of Installment</label><input type="text" className="input" /></div>
              </div>
              <div className="column">
                <div className="field-row"><label className="f-label">Outstanding Amount</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">No of Installment Paid</label><input type="text" className="input" /></div>
              </div>
              <div className="column">
                <div className="field-row"><label className="f-label">Capital First</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Capital Normal</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Capital Last</label><input type="text" className="input" /></div>
              </div>
            </div>
          </div>

          {/* Bank & Settlement Section */}
          <div className="bordered-section">
            <div className="section-grid">
              <div className="column">
                <div className="field-row"><label className="f-label">Bank</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Bank Branch</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Account No</label><input type="text" className="input" /></div>
              </div>
              <div className="column">
                <div className="field-row"><label className="f-label">Outstanding installment</label><input type="text" className="input" /></div>
                <div className="field-row"><label className="f-label">Outstanding interest amount</label><input type="text" className="input" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Column */}
        <div className="button-column">
          <button className="action-btn">Add</button>
          <button className="action-btn">Edit</button>
          <button className="action-btn">Delete</button>
          <div className="spacer-40"></div>
          <button className="action-btn">Reset</button>
          <button className="action-btn">Back</button>
        </div>
      </div>

      {/* Blue System Footer */}
      <div className="sys-footer">All Right receved 2026- information technology unit</div>
    </div>
  );
}