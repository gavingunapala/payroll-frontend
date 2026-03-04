import React, { useState } from 'react';

export default function EdScreen() {
  const [monthType, setMonthType] = useState('current');

  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Service Personal Profile - Sri Lanka Air Force</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Filter Section */}
      <div style={styles.filterSection}>
        <div style={styles.leftFilterGroup}>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input 
                type="radio" 
                name="month" 
                checked={monthType === 'current'} 
                onChange={() => setMonthType('current')} 
              /> Current Month
            </label>
            <label style={styles.radioLabel}>
              <input 
                type="radio" 
                name="month" 
                checked={monthType === 'previous'} 
                onChange={() => setMonthType('previous')} 
              /> Previous
            </label>
          </div>

          <div style={styles.serviceRow}>
            <label style={styles.label}>Service Number</label>
            <input type="text" style={styles.serviceInput} />
          </div>

          {/* Dynamic Labels Row */}
          <div style={styles.summaryLabelsRow}>
            <span style={styles.summaryItem}>Total Earning: <span style={styles.val}>lblTotEarning</span></span>
            <span style={styles.summaryItem}>Total Deduction: <span style={styles.val}>lblTotDeduction</span></span>
            <span style={styles.summaryItem}>Net Pay: <span style={styles.val}>lblNetPay</span></span>
            <span style={styles.summaryItem}>Current Pay Unit: <span style={styles.val}>lblCurrPayUnit</span></span>
          </div>
        </div>

        {/* Right Recovery Totals Box */}
        <div style={styles.recoveryBox}>
          <div style={styles.recoveryRow}>
            <span>W & OP Recovery Total :</span>
            <span style={styles.val}>0.00</span>
          </div>
          <div style={styles.recoveryRow}>
            <span>W & OP (Old Svc) :</span>
            <span style={styles.val}>0.00</span>
          </div>
        </div>
      </div>

      {/* ED Information Tab */}
      <div style={styles.tabsContainer}>
        <div style={styles.activeTab}>ED Information</div>
      </div>

      {/* Main Table Area */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Item Code</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Earnings</th>
              <th style={styles.th}>Deductions</th>
              <th style={styles.th}>Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would go here */}
            <tr>
              <td colSpan="5" style={styles.emptyRow}>No records found for selected month</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* System Footer */}
      <div style={styles.sysFooter}>All Right receved 2026- information technology unit</div>
    </div>
  );
}

const styles = {
  contentWrapper: {
    backgroundColor: '#fff',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerBar: {
    backgroundColor: '#87ceeb',
    padding: '8px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { color: '#fff', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  filterSection: {
    padding: '15px 20px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftFilterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
  },
  radioLabel: { fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' },
  serviceRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  label: { fontSize: '11px', fontWeight: 'bold' },
  serviceInput: { padding: '3px', border: '1px solid #ccc', width: '120px' },
  
  summaryLabelsRow: {
    display: 'flex',
    gap: '15px',
    fontSize: '10px',
    color: '#0056b3',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  summaryItem: { borderRight: '1px solid #ddd', paddingRight: '10px' },
  val: { color: '#333' },

  recoveryBox: {
    border: '1px dashed #0056b3',
    padding: '10px',
    width: '250px',
    fontSize: '11px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  recoveryRow: { display: 'flex', justifyContent: 'space-between' },

  tabsContainer: { display: 'flex', padding: '15px 20px 0 20px' },
  activeTab: { 
    padding: '5px 15px', 
    fontSize: '11px', 
    border: '1px solid #ccc', 
    borderBottom: 'none', 
    backgroundColor: '#fff', 
    fontWeight: 'bold' 
  },
  
  tableContainer: {
    margin: '0 20px 20px 20px',
    border: '1px solid #ccc',
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#fff',
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { 
    backgroundColor: '#f8f9fa', 
    fontSize: '11px', 
    textAlign: 'left', 
    padding: '8px', 
    borderBottom: '1px solid #ccc',
    borderRight: '1px solid #eee'
  },
  emptyRow: { textAlign: 'center', padding: '100px', color: '#999', fontSize: '12px' },
  
  sysFooter: { 
    backgroundColor: '#87ceeb', 
    textAlign: 'right', 
    padding: '8px 20px', 
    fontSize: '11px', 
    fontWeight: 'bold',
    marginTop: 'auto' 
  }
};