import React, { useState } from 'react';

export default function PayCalculator() {
  const [monthSelection, setMonthSelection] = useState('current');

  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Service Personal Profile - Sri Lanka Air Force</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Filter & Summary Section */}
      <div style={styles.filterSection}>
        <div style={styles.topRow}>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input 
                type="radio" 
                name="month" 
                checked={monthSelection === 'current'} 
                onChange={() => setMonthSelection('current')} 
              /> Current Month
            </label>
            <label style={styles.radioLabel}>
              <input 
                type="radio" 
                name="month" 
                checked={monthSelection === 'previous'} 
                onChange={() => setMonthSelection('previous')} 
              /> Previous
            </label>
          </div>

          <div style={styles.yearMonthGroup}>
            <span style={styles.label}>Select The Year and Month</span>
            <div style={styles.inputAlign}>
              <span style={styles.smallLabel}>Year</span>
              <input type="text" style={styles.smallInput} />
              <span style={styles.smallLabel}>Month</span>
              <input type="text" style={styles.smallInput} />
            </div>
          </div>
        </div>

        <div style={styles.serviceRow}>
          <div style={styles.fieldItem}>
            <label style={styles.label}>Service Number</label>
            <input type="text" style={styles.serviceInput} />
          </div>
          <span style={styles.officerName}>SGT AMARASINGHE</span>
        </div>

        {/* Calculation Summary Bar */}
        <div style={styles.summaryBar}>
          <div style={styles.summaryItem}><span style={styles.sumLabel}>Total Earning</span> <span style={styles.sumVal}>=40%</span></div>
          <div style={styles.summaryItem}><span style={styles.sumLabel}>Total Deduction</span> <span style={styles.sumVal}>40% Balance</span></div>
          <div style={styles.summaryItem}><span style={styles.sumLabel}>Net Pay</span> <span style={styles.sumVal}>0.00</span></div>
        </div>
      </div>

      {/* Table Section */}
      <div style={styles.tableWrapper}>
        <div style={styles.tableTab}>Deduction Percentage | lblPayPercentage</div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Pay Unit</th>
                <th style={styles.th}>Rank</th>
                <th style={styles.th}>CostCenter</th>
                <th style={styles.th}>ItemCode</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>TotAmount</th>
                <th style={styles.th}>Authority</th>
                <th style={styles.th}>BankCode</th>
                <th style={styles.th}>BranchCode</th>
                <th style={styles.th}>AccountNo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10" style={styles.emptyRow}>No calculation data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* System Footer */}
      <div style={styles.sysFooter}>All Right receved 2026- information technology unit</div>
    </div>
  );
}

const styles = {
  contentWrapper: { backgroundColor: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' },
  headerBar: { backgroundColor: '#87ceeb', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  filterSection: { padding: '15px 20px', borderBottom: '2px solid #b8860b', backgroundColor: '#fdfdfd' },
  topRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
  radioGroup: { display: 'flex', gap: '20px' },
  radioLabel: { fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px' },
  
  yearMonthGroup: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' },
  inputAlign: { display: 'flex', gap: '10px', alignItems: 'center' },
  smallLabel: { fontSize: '10px' },
  smallInput: { width: '80px', border: '1px solid #ccc', height: '18px' },

  serviceRow: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' },
  fieldItem: { display: 'flex', alignItems: 'center', gap: '10px' },
  label: { fontSize: '11px', fontWeight: 'bold' },
  serviceInput: { padding: '2px', border: '1px solid #ccc', width: '150px' },
  officerName: { fontSize: '12px', fontWeight: 'bold', color: '#333' },

  summaryBar: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid #eee' },
  summaryItem: { display: 'flex', gap: '30px', flex: 1 },
  sumLabel: { fontSize: '11px', color: '#555' },
  sumVal: { fontSize: '11px', fontWeight: 'bold', color: '#0056b3' },

  tableWrapper: { padding: '20px', flex: 1, backgroundColor: '#fff' },
  tableTab: { fontSize: '11px', padding: '5px 15px', border: '1px solid #ccc', borderBottom: 'none', width: 'fit-content', backgroundColor: '#f9f9f9' },
  tableContainer: { border: '1px solid #ccc', minHeight: '300px' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { fontSize: '11px', backgroundColor: '#f0f0f0', padding: '8px', border: '1px solid #ddd', textAlign: 'left' },
  emptyRow: { textAlign: 'center', padding: '100px', color: '#999', fontSize: '12px' },

  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};