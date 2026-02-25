import React, { useState } from 'react';

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div style={styles.container}>
      {/* Service Number Row */}
      <div style={styles.serviceNumberRow}>
        <label style={styles.label}>Service Number <span style={styles.required}>*</span></label>
        <input type="text" placeholder="Enter Service No." style={styles.serviceInput} />
      </div>

      {/* Employee Information Section */}
      <div style={styles.employeeInfoSection}>
        <div style={styles.sectionTitle}>Employee Information</div>
        
        <div style={styles.formGrid}>
          {/* Column 1 */}
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Rank <span style={styles.required}>*</span></label>
              <select style={styles.select}>
                <option>Select Rank</option>
              </select>
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Initials</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Surname <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Scheme Type</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Type</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Branch/Trade <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Group <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Other Name</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          {/* Column 2 */}
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Sex</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Marriage Status <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Date Of Birth <span style={styles.required}>*</span></label>
              <input type="date" defaultValue="2026-02-18" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Religion</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Marriage Date</label>
              <input type="text" placeholder="mm/ dd/ yyyy" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Nationality</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Rent</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          {/* Column 3 */}
          <div style={styles.column}>
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Land Phone No</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Mobile No</label>
              <input type="text" style={styles.input} />
            </div>
            
            {/* Photo placeholder area */}
            <div style={styles.photoArea}>
              <div style={styles.photoPlaceholder}>
                <span style={styles.noImageText}>No Image Available</span>
              </div>
              <button style={styles.browseBtn}>Browse</button>
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Pay Unit <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Payment Mode</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Cost Center <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <div 
          style={activeTab === 'service' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('service')}
        >
          Service Information
        </div>
        <div 
          style={activeTab === 'status' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('status')}
        >
          Status Information
        </div>
        <div 
          style={activeTab === 'salary' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('salary')}
        >
          Salary Information
        </div>
      </div>

      {/* Tab Content */}
      <div style={styles.tabContent}>
        {activeTab === 'service' && (
          <div style={styles.serviceGrid}>
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Enlisted Date <span style={styles.required}>*</span></label>
              <input type="date" defaultValue="2026-02-18" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Increment Date</label>
              <input type="date" defaultValue="2026-02-18" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Expected Retirement</label>
              <input type="date" defaultValue="2026-02-18" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Cadet Number</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Posting/Attachment</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Formation <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>TA Number</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Living IN/Out</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Station <span style={styles.required}>*</span></label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>GCB</label>
              <input type="text" style={styles.input} />
            </div>
          </div>
        )}
        
        {activeTab === 'status' && (
          <div style={styles.placeholderContent}>Status Information Content</div>
        )}
        
        {activeTab === 'salary' && (
          <div style={styles.placeholderContent}>Salary Information Content</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    fontSize: '12px',
    backgroundColor: '#f5f5f5',
    padding: '15px',
    minHeight: '100vh',
  },
  serviceNumberRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#e8f4f8',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  label: {
    fontSize: '12px',
    color: '#333',
    fontWeight: '500',
  },
  required: {
    color: '#d9534f',
  },
  serviceInput: {
    padding: '4px 8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    width: '150px',
  },
  employeeInfoSection: {
    border: '1px solid #0078a8',
    borderLeft: '4px solid #0078a8',
    borderRadius: '4px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#0078a8',
    marginBottom: '15px',
    marginTop: '-5px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  fieldLabel: {
    fontSize: '11px',
    color: '#555',
    fontWeight: '500',
  },
  input: {
    padding: '5px 8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f9f9f9',
  },
  select: {
    padding: '5px 8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f9f9f9',
  },
  photoArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
  },
  photoPlaceholder: {
    width: '100px',
    height: '120px',
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  noImageText: {
    fontSize: '10px',
    color: '#999',
    textAlign: 'center',
  },
  browseBtn: {
    padding: '5px 20px',
    fontSize: '11px',
    backgroundColor: '#a97b23',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  tabsContainer: {
    display: 'flex',
    gap: '2px',
    marginBottom: '0',
  },
  tab: {
    padding: '8px 20px',
    fontSize: '12px',
    backgroundColor: '#d4d4d4',
    color: '#333',
    cursor: 'pointer',
    border: '1px solid #bbb',
    borderBottom: 'none',
    borderRadius: '4px 4px 0 0',
    fontWeight: '500',
  },
  activeTab: {
    backgroundColor: '#0f4c5c',
    color: '#fff',
    fontWeight: 'bold',
  },
  tabContent: {
    border: '1px solid #bbb',
    borderTop: '3px solid #0f4c5c',
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '200px',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px 20px',
  },
  placeholderContent: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
    padding: '40px',
  },
};
