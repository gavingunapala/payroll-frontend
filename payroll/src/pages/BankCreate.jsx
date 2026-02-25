import React, { useState } from 'react';

export default function BankCreate() {
  const [formData, setFormData] = useState({
    bankCode: '',
    bankName: '',
    branchName: '',
    branchCode: '',
    address: '',
    contactNumber: '',
    email: '',
    accountNumberPrefix: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bank data:', formData);
    // Bank creation logic here
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Bank Information - Create New Bank</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="mb-3">Bank Details</h5>
                    <div className="mb-3">
                      <label className="form-label">Bank Code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="bankCode"
                        value={formData.bankCode}
                        onChange={handleInputChange}
                        placeholder="Enter bank code (e.g., BOC001)"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Bank Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="Enter bank name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Branch Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleInputChange}
                        placeholder="Enter branch name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Branch Code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="branchCode"
                        value={formData.branchCode}
                        onChange={handleInputChange}
                        placeholder="Enter branch code"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="mb-3">Contact Information</h5>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <textarea 
                        className="form-control" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter bank address"
                        rows="3"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Account Number Prefix</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="accountNumberPrefix"
                        value={formData.accountNumberPrefix}
                        onChange={handleInputChange}
                        placeholder="Enter account number prefix"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-end gap-2">
                      <button type="button" className="btn btn-secondary">Cancel</button>
                      <button type="submit" className="btn btn-primary">Create Bank</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
