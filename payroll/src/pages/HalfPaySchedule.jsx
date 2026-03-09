import React, { useState } from 'react';

export default function HalfPaySchedule() {
  // Generate days 1 to 31 for the selection grid
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Half Pay Schedule</span>
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
            <input type="text" style={styles.smallInput} defaultValue="2021" />
            <span style={styles.smallLabel}>Month</span>
            <input type="text" style={styles.smallInput} defaultValue="10" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={styles.mainLayout}>
        <div style={styles.formArea}>
          {/* Service No Section */}
          <div style={styles.serviceRow}>
            <div style={styles.fieldRow}>
              <label style={styles.label}>Service No</label>
              <input type="text" style={styles.inputMedium} />
              <div style={styles.infoBox}></div>
            </div>
          </div>

          {/* Half Pay Days Grid */}
          <div style={styles.daysContainer}>
            <div style={styles.daysHeader}>Half Pay Days</div>
            <div style={styles.daysGrid}>
              {days.map(day => (
                <div key={day} style={styles.dayItem}>
                  <input type="checkbox" id={`day-${day}`} />
                  <label htmlFor={`day-${day}`} style={styles.dayLabel}>{day}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Summary Fields */}
          <div style={styles.summarySection}>
             <div style={styles.fieldRow}>
                <label style={styles.label}>Total Days</label>
                <input type="text" style={styles.inputSmall} />
             </div>
             <div style={styles.fieldRow}>
                <label style={styles.label}>Authority</label>
                <input type="text" style={styles.inputLarge} />
             </div>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div style={styles.buttonColumn}>
          <button style={styles.actionBtn}>Add</button>
          <button style={styles.actionBtn}>Edit</button>
          <div style={styles.deleteGroup}>
            <input type="checkbox" id="delCheck" />
            <label htmlFor="delCheck" style={{ fontSize: '10px' }}>Delete Records</label>
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

  daysContainer: { marginBottom: '30px' },
  daysHeader: { fontSize: '11px', fontWeight: 'bold', marginBottom: '10px', color: '#0056b3' },
  daysGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(7, 1fr)', 
    gap: '10px', 
    maxWidth: '500px',
    border: '1px solid #87ceeb',
    padding: '15px',
    borderRadius: '4px'
  },
  dayItem: { display: 'flex', alignItems: 'center', gap: '5px' },
  dayLabel: { fontSize: '11px' },

  summarySection: { display: 'flex', flexDirection: 'column', gap: '10px' },
  inputSmall: { width: '80px', padding: '2px', border: '1px solid #ccc' },
  inputLarge: { width: '300px', padding: '2px', border: '1px solid #ccc' },

  buttonColumn: { width: '150px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' },
  actionBtn: { padding: '2px 15px', backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '11px', cursor: 'pointer', boxShadow: '1px 1px 1px #ddd' },
  deleteGroup: { display: 'flex', alignItems: 'center', gap: '5px' },

  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};