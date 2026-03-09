import React, { useState } from 'react';

export default function ExceptionData() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Service Personal Profile - Sri Lanka Air Force</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Service Number Row */}
      <div style={styles.serviceNumberRow}>
        <label style={styles.label}>Service Number</label>
        <input type="text" placeholder="Enter Service No." style={styles.serviceInput} />
      </div>

      {/* Main Profile Content */}
      <div style={styles.profileSection}>
        <div style={styles.formGrid}>
          {/* Column 1 */}
          <div style={styles.column}>
            {['Rank', 'Initials', 'Surname', 'Shema Type', 'Type', 'Branch/Trade', 'Group', 'Other name'].map(label => (
              <div key={label} style={styles.fieldRow}>
                <label style={styles.fieldLabel}>{label}</label>
                <input type="text" style={styles.input} />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div style={styles.column}>
            {['Sex', 'Marrige Status', 'DOB', 'Religion', 'Marrige Date', 'Nationalty', 'Rent'].map(label => (
              <div key={label} style={styles.fieldRow}>
                <label style={styles.fieldLabel}>{label}</label>
                <input type="text" style={styles.input} />
              </div>
            ))}
          </div>

          {/* Column 3 (Contact & Unit Info) */}
          <div style={styles.column}>
            <div style={styles.fieldRow}>
              <label style={styles.fieldLabel}>Land Phone NO</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.fieldRow}>
              <label style={styles.fieldLabel}>Mobile No</label>
              <input type="text" style={styles.input} />
            </div>
            
            <div style={styles.photoContainer}>
              <div style={styles.photoBox}>No Image Available</div>
              <input type="text" style={{...styles.input, width: '80px', marginTop: '5px'}} />
            </div>

            {['Pay Unit', 'Payment Mode', 'Cost Center'].map(label => (
              <div key={label} style={styles.fieldRow}>
                <label style={styles.fieldLabel}>{label}</label>
                <input type="text" style={styles.input} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabsContainer}>
        {['Service Information', 'Status Information', 'Salary Information'].map(tab => (
          <div 
            key={tab}
            style={activeTab === tab.toLowerCase().split(' ')[0] ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content (Service Info) */}
      <div style={styles.tabContent}>
        <div style={styles.serviceGrid}>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Enlisted Date</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Increment Date</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Expected Retirement</label><input type="text" style={styles.input} /></div>
          
          <div style={{...styles.fieldRow, gridColumn: '2'}}><label style={styles.fieldLabel}>Posting/Attachment</label><input type="text" style={styles.input} /></div>
          
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Cadet Number</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Living IN/Out</label><input type="text" style={styles.input} /></div>
          
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>TA Number</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>GCB</label><input type="text" style={styles.input} /></div>
          
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Station</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Formation</label><input type="text" style={styles.input} /></div>
        </div>
      </div>

      {/* Blue Footer */}
      <div style={styles.sysFooter}>All Right receved 2026- information technology unit</div>
    </div>
  );
}

const styles = {
  contentWrapper: { backgroundColor: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' },
  headerBar: { backgroundColor: '#87ceeb', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  serviceNumberRow: { padding: '15px 40px', borderBottom: '1px solid #ddd' },
  label: { fontSize: '12px', fontWeight: 'bold', marginRight: '10px' },
  serviceInput: { padding: '3px', border: '1px solid #ccc', width: '150px' },
  
  profileSection: { padding: '20px 40px' },
  formGrid: { display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '30px' },
  column: { display: 'flex', flexDirection: 'column', gap: '8px' },
  fieldRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  fieldLabel: { fontSize: '11px', color: '#444', width: '100px' },
  input: { padding: '3px 5px', fontSize: '12px', border: '1px solid #ccc', width: '160px', height: '22px' },
  
  photoContainer: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' },
  photoBox: { width: '110px', height: '90px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', fontSize: '10px', textAlign: 'center', display: 'flex', alignItems: 'center', padding: '5px' },

  tabsContainer: { display: 'flex', padding: '0 40px', marginTop: '10px' },
  tab: { padding: '6px 20px', fontSize: '11px', border: '1px solid #ccc', borderBottom: 'none', marginRight: '2px', backgroundColor: '#f9f9f9', cursor: 'pointer' },
  activeTab: { backgroundColor: '#fff', borderTop: '2px solid #87ceeb' },
  
  tabContent: { margin: '0 40px 20px 40px', border: '1px solid #ccc', padding: '30px', backgroundColor: '#fff' },
  serviceGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px 40px' },
  
  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};