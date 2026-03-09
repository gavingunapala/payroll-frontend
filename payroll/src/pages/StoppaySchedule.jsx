import React, { useState } from 'react';

export default function StoppaySchedule() {
  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Schedule Stop Payment</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Filter Section */}
      <div style={styles.topFilterSection}>
        <div style={styles.fieldRow}>
          <label style={styles.label}>Select The Year and Month</label>
          <div style={styles.inputGroup}>
            <span style={styles.smallLabel}>Year</span>
            <input type="text" style={styles.smallInput} defaultValue="2026" />
            <span style={styles.smallLabel}>Month</span>
            <input type="text" style={styles.smallInput} defaultValue="03" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={styles.mainLayout}>
        <div style={styles.formArea}>
          {/* Service No Row */}
          <div style={styles.serviceRow}>
            <div style={styles.fieldRow}>
              <label style={styles.label}>Service No</label>
              <input type="text" style={styles.inputMedium} />
              <div style={styles.infoBox}></div>
            </div>
          </div>

          {/* Stop Pay Details Section */}
          <div style={styles.borderedSection}>
            <div style={styles.formGrid}>
              <div style={styles.column}>
                <div style={styles.fieldRow}>
                  <label style={styles.fLabel}>Stop Reason</label>
                  <select style={styles.select}>
                    <option>Select Reason</option>
                    <option>Deserted</option>
                    <option>Discharged</option>
                    <option>Deceased</option>
                    <option>Court Martial</option>
                  </select>
                </div>
                <div style={styles.fieldRow}>
                  <label style={styles.fLabel}>Authority</label>
                  <input type="text" style={styles.inputLarge} />
                </div>
              </div>

              <div style={styles.column}>
                <div style={styles.fieldRow}>
                  <label style={styles.fLabel}>Stop From Date</label>
                  <input type="date" style={styles.input} />
                </div>
                <div style={styles.fieldRow}>
                  <label style={styles.fLabel}>Stop To Date</label>
                  <input type="date" style={styles.input} />
                </div>
                <div style={styles.fieldRow}>
                  <label style={styles.fLabel}>Status</label>
                  <input type="text" defaultValue="Active" style={styles.input} />
                </div>
              </div>
            </div>
          </div>

          {/* Remarks Section */}
          <div style={{ marginTop: '20px' }}>
            <label style={styles.fLabel}>Special Remarks</label>
            <textarea style={styles.textarea}></textarea>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div style={styles.buttonColumn}>
          <button style={styles.actionBtn}>Add</button>
          <button style={styles.actionBtn}>Edit</button>
          <div style={styles.deleteGroup}>
            <input type="checkbox" id="delStop" />
            <label htmlFor="delStop" style={{ fontSize: '10px' }}>Delete Records</label>
          </div>
          <button style={styles.actionBtn}>Delete</button>
          
          <div style={{ height: '80px' }}></div>
          
          <button style={styles.actionBtn}>Reset</button>
          <button style={styles.actionBtn}>Back</button>
        </div>
      </div>

      {/* Blue System Footer */}
      <div style={styles.sysFooter}>All Right receved 2026- information technology unit</div>
    </div>
  );
}

const styles = {
  contentWrapper: { backgroundColor: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' },
  headerBar: { backgroundColor: '#87ceeb', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: '#444', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  topFilterSection: { padding: '15px 40px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' },
  fieldRow: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' },
  label: { fontSize: '11px', fontWeight: 'bold', minWidth: '80px' },
  inputGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  smallLabel: { fontSize: '10px', color: '#666' },
  smallInput: { width: '60px', padding: '2px', border: '1px solid #ccc' },

  mainLayout: { display: 'flex', padding: '20px 40px', flex: 1 },
  formArea: { flex: 1 },
  serviceRow: { marginBottom: '25px' },
  inputMedium: { width: '150px', padding: '2px', border: '1px solid #ccc' },
  infoBox: { width: '30px', height: '20px', border: '1px solid #ccc', backgroundColor: '#eee' },

  borderedSection: { borderTop: '2px solid #87ceeb', paddingTop: '15px' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' },
  column: { display: 'flex', flexDirection: 'column', gap: '10px' },
  fLabel: { fontSize: '11px', color: '#333', width: '100px', display: 'block', marginBottom: '4px' },
  input: { width: '160px', padding: '2px 5px', border: '1px solid #ccc', fontSize: '12px' },
  inputLarge: { width: '250px', padding: '2px 5px', border: '1px solid #ccc', fontSize: '12px' },
  select: { width: '170px', padding: '2px', border: '1px solid #ccc', fontSize: '12px' },
  textarea: { width: '100%', height: '60px', border: '1px solid #ccc', resize: 'none', padding: '5px' },

  buttonColumn: { width: '150px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' },
  actionBtn: { padding: '2px 15px', backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '11px', cursor: 'pointer', boxShadow: '1px 1px 1px #ddd' },
  deleteGroup: { display: 'flex', alignItems: 'center', gap: '5px' },

  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};