import React, { useState } from 'react';

export default function PayDistribution() {
  const [activeBankTab, setActiveBankTab] = useState(1);
  const [employeeType, setEmployeeType] = useState('Regular');

  // Logic: Disable "Eligible To" if "Regular" is selected
  const isEligibleToDisabled = employeeType === 'Regular';

  return (
    <div style={styles.container}>
      {/* Search Header Row */}
      <div style={styles.headerRow}>
        <div style={styles.sectionTitle}>Pay Distribution</div>
        <div style={styles.searchGroup}>
          <input type="text" placeholder="Officer Search..." style={styles.searchInput} />
          <button style={styles.searchBtn}>🔍</button>
        </div>
      </div>

      {/* Main Form Content */}
      <div style={styles.mainSection}>
        <div style={styles.formGrid}>
          {/* Row 1: Ref and Search */}
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Ref No</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <input type="text" style={styles.input} />
              <button style={styles.actionBtnBlue}>SEARCH BATCH/ITEMS</button>
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Type</label>
            <div style={styles.radioContainer}>
              <label><input type="radio" name="type" value="Regular" checked={employeeType === 'Regular'} onChange={(e) => setEmployeeType(e.target.value)} /> Regular</label>
              <label><input type="radio" name="type" value="Volunteer" checked={employeeType === 'Volunteer'} onChange={(e) => setEmployeeType(e.target.value)} /> Volunteer</label>
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Service Number</label>
            <input type="text" style={styles.input} />
          </div>

          {/* Row 2: Rank and Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Rank</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={{ ...styles.fieldGroup, gridColumn: 'span 2' }}>
            <label style={styles.fieldLabel}>Name</label>
            <input type="text" style={styles.input} />
          </div>
        </div>

        {/* Eligibility Sub-section */}
        <div style={styles.subHeader}>Eligibility & Cash Details</div>
        <div style={styles.formGrid}>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Case/PayMode Eligible From</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Case/Payment Mode Eligible To</label>
            <input 
                type="date" 
                style={isEligibleToDisabled ? {...styles.input, ...styles.disabledInput} : styles.input} 
                disabled={isEligibleToDisabled} 
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Payment Mode</label>
            <select style={styles.select}><option>Bank</option></select>
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Cash Use Status</label>
            <select style={styles.select}><option>No</option></select>
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Cash Pay Value</label>
            <input type="text" defaultValue="0.00" style={styles.input} />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.fieldLabel}>Status</label>
            <input type="text" defaultValue="Active" style={styles.input} />
          </div>
        </div>
      </div>

      {/* Bank Details Tabs Section */}
      <div style={styles.tabsContainer}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div 
            key={num}
            style={activeBankTab === num ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveBankTab(num)}
          >
            Bank {num}
          </div>
        ))}
      </div>

      <div style={styles.tabContent}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, ...styles.formGrid, gridTemplateColumns: '1fr 1fr' }}>
            <div style={styles.fieldGroup}><label style={styles.fieldLabel}>Bank Use Status</label><input type="text" style={styles.input} /></div>
            <div style={styles.fieldGroup}><label style={styles.fieldLabel}>Pay Value</label><input type="text" style={styles.input} /></div>
            <div style={styles.fieldGroup}><label style={styles.fieldLabel}>Bank</label><input type="text" style={styles.input} /></div>
            <div style={styles.fieldGroup}><label style={styles.fieldLabel}>Branch</label><input type="text" style={styles.input} /></div>
            <div style={{...styles.fieldGroup, gridColumn: 'span 2'}}><label style={styles.fieldLabel}>Account No</label><input type="text" style={styles.input} /></div>
          </div>
          
          {/* Side Action Buttons */}
          <div style={styles.sideButtons}>
            <button style={styles.btnGreen}>ADD</button>
            <button style={styles.btnSky}>EDIT</button>
            <button style={styles.btnRed}>DELETE</button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div style={styles.footerRow}>
        <button style={styles.btnRed}>RESET</button>
        <button style={styles.btnSky}>BACK</button>
      </div>
      
      <div style={styles.sysFooter}>All Right reserved 2026 - information technology unit</div>
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
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e8f4f8',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  mainSection: {
    border: '1px solid #0078a8',
    borderLeft: '4px solid #0078a8',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0078a8',
  },
  subHeader: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
    margin: '20px 0 10px 0',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '15px 20px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  fieldLabel: {
    fontSize: '11px',
    color: '#555',
    fontWeight: '600',
  },
  input: {
    padding: '5px 8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f9f9f9',
  },
  disabledInput: {
    backgroundColor: '#eee',
    color: '#999',
    cursor: 'not-allowed'
  },
  select: {
    padding: '5px 8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  radioContainer: {
    display: 'flex',
    gap: '15px',
    padding: '5px',
    border: '1px solid #eee',
    borderRadius: '3px'
  },
  tabsContainer: {
    display: 'flex',
    gap: '2px',
  },
  tab: {
    padding: '8px 20px',
    backgroundColor: '#d4d4d4',
    cursor: 'pointer',
    border: '1px solid #bbb',
    borderBottom: 'none',
    borderRadius: '4px 4px 0 0',
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
    marginBottom: '20px'
  },
  sideButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '120px'
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px'
  },
  searchInput: { padding: '5px', border: '1px solid #ccc', borderRadius: '3px 0 0 3px' },
  searchBtn: { padding: '5px 10px', border: '1px solid #ccc', borderLeft: 'none', borderRadius: '0 3px 3px 0', cursor: 'pointer' },
  btnGreen: { backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '8px', borderRadius: '3px', cursor: 'pointer' },
  btnSky: { backgroundColor: '#0078a8', color: '#fff', border: 'none', padding: '8px', borderRadius: '3px', cursor: 'pointer' },
  btnRed: { backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '8px', borderRadius: '3px', cursor: 'pointer' },
  actionBtnBlue: { backgroundColor: '#0056b3', color: '#fff', fontSize: '10px', border: 'none', padding: '0 10px', borderRadius: '3px' },
  sysFooter: { textAlign: 'center', marginTop: '30px', color: '#999', fontSize: '10px' }
};