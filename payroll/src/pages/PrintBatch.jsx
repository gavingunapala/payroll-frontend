import React, { useState } from 'react';

export default function PrintBatch() {
  const [schemaType, setSchemaType] = useState('Regular');
  const [viewType, setViewType] = useState('View All');

  return (
    <div style={styles.contentWrapper}>
      {/* Header Bar */}
      <div style={styles.headerBar}>
        <div style={styles.headerTitle}>Print Batch</div>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Filter Options Section */}
      <div style={styles.filterSection}>
        <div style={styles.filterRow}>
          {/* Schema Type Group */}
          <div style={styles.group}>
            <span style={styles.label}>Shcema Type</span>
            <label style={styles.radioLabel}>
              <input type="radio" name="schema" checked={schemaType === 'Regular'} onChange={() => setSchemaType('Regular')} /> Regular
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="schema" checked={schemaType === 'Volunteer'} onChange={() => setSchemaType('Volunteer')} /> Volunteer
            </label>
          </div>

          {/* Search/View Group */}
          <div style={styles.groupVertical}>
            <label style={styles.radioLabel}>
              <input type="radio" name="view" checked={viewType === 'View All'} onChange={() => setViewType('View All')} /> View All
            </label>
            <div style={styles.inputAlign}>
              <label style={styles.radioLabel}>
                <input type="radio" name="view" checked={viewType === 'Created User'} onChange={() => setViewType('Created User')} /> Search By Created User
              </label>
              <input type="text" style={styles.smallInput} />
            </div>
            <div style={styles.inputAlign}>
              <label style={styles.radioLabel}>
                <input type="radio" name="view" checked={viewType === 'Created Date'} onChange={() => setViewType('Created Date')} /> Search By Created Date
              </label>
              <input type="text" style={styles.smallInput} />
            </div>
          </div>

          {/* Search Button Area */}
          <div style={styles.searchAction}>
            <span style={{ fontSize: '10px', color: '#d9534f', display: 'block', marginBottom: '4px' }}>Other Batch Report</span>
            <button style={styles.btnClassic}>Search</button>
          </div>
        </div>

        {/* Correction Date Row */}
        <div style={{...styles.filterRow, marginTop: '10px'}}>
           <div style={styles.group}>
              <input type="checkbox" style={{marginRight: '8px'}} />
              <span style={styles.label}>Correction Date</span>
           </div>
        </div>
      </div>

      {/* Main Empty Area (For Batch List Table) */}
      <div style={styles.tableArea}>
        {/* You can map your batch list data here later */}
      </div>

      {/* Blue Footer with Action Buttons */}
      <div style={styles.blueFooter}>
        <div style={styles.footerContent}>
          <div style={styles.leftBtns}>
            <button style={styles.btnClassic}>Check All</button>
            <button style={styles.btnClassic}>Uncheck</button>
          </div>
          
          <div style={styles.rightInfo}>
            <span style={styles.copyText}>All Right receved 2026- information technology unit</span>
            <div style={styles.rightBtns}>
              <button style={styles.btnClassic}>View Transactions</button>
              <button style={styles.btnClassic}>Print</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  contentWrapper: {
    backgroundColor: '#fff',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  headerBar: {
    backgroundColor: '#87ceeb',
    padding: '8px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #6bb5d8'
  },
  headerTitle: { color: '#444', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  filterSection: {
    padding: '15px 20px',
    borderBottom: '1px solid #b8860b', // Gold-ish line from your screenshot
    backgroundColor: '#f9f9f9',
  },
  filterRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '40px',
  },
  group: { display: 'flex', alignItems: 'center', gap: '15px' },
  groupVertical: { display: 'flex', flexDirection: 'column', gap: '5px' },
  inputAlign: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '320px' },
  
  label: { fontSize: '11px', fontWeight: 'bold', color: '#333' },
  radioLabel: { fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' },
  smallInput: { padding: '2px', border: '1px solid #999', width: '150px', height: '18px' },
  
  searchAction: { textAlign: 'center', marginLeft: 'auto' },
  
  tableArea: { flex: 1, backgroundColor: '#fff' },

  blueFooter: {
    backgroundColor: '#87ceeb',
    padding: '15px 20px',
    marginTop: 'auto',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  leftBtns: { display: 'flex', gap: '20px' },
  rightInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  copyText: { fontSize: '12px', fontWeight: 'bold', color: '#000' },
  rightBtns: { display: 'flex', gap: '10px' },

  btnClassic: {
    padding: '2px 15px',
    fontSize: '11px',
    backgroundColor: '#fff',
    border: '1px solid #000',
    cursor: 'pointer',
    minWidth: '80px',
    boxShadow: '1px 1px 1px #888'
  }
};