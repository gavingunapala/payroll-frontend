import React from 'react';

export default function WaterElectricity() {
  const months = [
    ['January', 'July'],
    ['February', 'August'],
    ['March', 'September'],
    ['April', 'October'],
    ['May', 'November'],
    ['June', 'December']
  ];

  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Water Electricity</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Selection Section */}
      <div style={styles.topSection}>
        <div style={styles.fieldRow}>
          <label style={styles.label}>Item</label>
          <input type="text" style={styles.inputSmall} />
        </div>
        <div style={styles.fieldRow}>
          <label style={styles.label}>Authority</label>
          <input type="text" style={styles.inputSmall} />
        </div>
      </div>

      {/* Main Content Body */}
      <div style={styles.mainLayout}>
        <div style={styles.formArea}>
          {/* Service No Row */}
          <div style={styles.serviceNoRow}>
            <label style={styles.label}>Service No</label>
            <input type="text" style={styles.inputSmall} />
            <input type="text" style={styles.inputSmall} />
          </div>

          <div style={styles.flexContainer}>
            {/* Checkboxes Column */}
            <div style={styles.checkboxSection}>
              <div style={styles.subTitle}>Check Eligible Months</div>
              <div style={styles.monthGrid}>
                {months.map((pair, idx) => (
                  <div key={idx} style={styles.monthRow}>
                    <div style={styles.checkItem}>
                      <input type="checkbox" /> <span style={styles.monthText}>{pair[0]}</span>
                    </div>
                    <div style={styles.checkItem}>
                      <input type="checkbox" /> <span style={styles.monthText}>{pair[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Month/Amount Table */}
            <div style={styles.tableSection}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Month</th>
                    <th style={styles.th}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty rows to match the height in the image */}
                  {[...Array(10)].map((_, i) => (
                    <tr key={i}><td style={styles.td}>&nbsp;</td><td style={styles.td}>&nbsp;</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Action Buttons Sidebar */}
        <div style={styles.buttonColumn}>
          <button style={styles.actionBtn}>Add</button>
          <button style={styles.actionBtn}>Edit</button>
          <div style={styles.deleteGroup}>
            <input type="checkbox" id="delRec" />
            <label htmlFor="delRec" style={{ fontSize: '10px' }}>Delete Records</label>
          </div>
          <button style={styles.actionBtn}>Delete</button>
          
          <div style={{ height: '60px' }}></div>
          
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
  
  topSection: { padding: '20px 40px', borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'column', gap: '10px' },
  fieldRow: { display: 'flex', alignItems: 'center', gap: '15px' },
  label: { fontSize: '11px', fontWeight: 'bold', width: '60px' },
  inputSmall: { width: '120px', padding: '2px', border: '1px solid #ccc' },

  mainLayout: { display: 'flex', padding: '20px 40px', flex: 1 },
  formArea: { flex: 1 },
  serviceNoRow: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '30px', paddingRight: '150px' },
  
  flexContainer: { display: 'flex', gap: '40px', alignItems: 'flex-start' },
  checkboxSection: { flex: 1 },
  subTitle: { fontSize: '11px', fontWeight: 'bold', marginBottom: '15px' },
  monthGrid: { display: 'flex', flexDirection: 'column', gap: '8px' },
  monthRow: { display: 'flex', gap: '40px' },
  checkItem: { display: 'flex', alignItems: 'center', gap: '8px', width: '100px' },
  monthText: { fontSize: '11px' },

  tableSection: { flex: 1 },
  table: { width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' },
  th: { fontSize: '11px', backgroundColor: '#f5f5f5', border: '1px solid #ccc', padding: '4px' },
  td: { border: '1px solid #eee', height: '20px' },

  buttonColumn: { width: '150px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' },
  actionBtn: { padding: '2px 15px', backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '11px', cursor: 'pointer', boxShadow: '1px 1px 1px #ddd' },
  deleteGroup: { display: 'flex', alignItems: 'center', gap: '5px' },

  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};