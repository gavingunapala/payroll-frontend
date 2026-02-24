import React, { useState } from 'react';

export default function Category() {
  const [categories, setCategories] = useState([
    { id: 1, code: 'CAT001', name: 'Executive', description: 'Executive level employees' },
    { id: 2, code: 'CAT002', name: 'Management', description: 'Management level employees' },
    { id: 3, code: 'CAT003', name: 'Staff', description: 'General staff employees' },
  ]);

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: ''
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
    // Add new category logic here
    console.log('New category:', formData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Category Management</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <h5>Add New Category</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Category Code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="code"
                        value={formData.code}
                        onChange={handleInputChange}
                        placeholder="Enter category code"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Category Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter category name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea 
                        className="form-control" 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter description"
                        rows="3"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Category</button>
                  </form>
                </div>
                <div className="col-md-8">
                  <h5>Existing Categories</h5>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th>Code</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <tr key={category.id}>
                            <td>{category.code}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                              <button className="btn btn-sm btn-outline-danger">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
