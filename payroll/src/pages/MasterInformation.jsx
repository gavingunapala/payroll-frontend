import React, { useState } from 'react';

export default function MasterInformation() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div style={styles.contentWrapper}>
      {/* Header Bar - Matches your Blue Header */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Service Personal Profile - Sri Lanka Air Force</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Service Number Input */}
      <div style={styles.serviceNumberRow}>
        <label style={styles.label}>Service Number</label>
        <input type="text" placeholder="Enter Service No." style={styles.serviceInput} />
      </div>

      {/* Main Profile Form */}
      <div style={styles.formContainer}>
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

          {/* Column 3 */}
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
              <div style={styles.photoBox}>No Image</div>
              <button style={styles.browseBtn}>Browse</button>
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

      {/* Bottom Tabs */}
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

      {/* Tab Content Area */}
      <div style={styles.tabContent}>
        <div style={styles.serviceGrid}>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Enlisted Date</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Increment Date</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Expected Retirement</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Posting/Attachment</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Cadet Number</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Living IN/Out</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>TA Number</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>GCB</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Station</label><input type="text" style={styles.input} /></div>
          <div style={styles.fieldRow}><label style={styles.fieldLabel}>Formation</label><input type="text" style={styles.input} /></div>
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
  serviceNumberRow: {
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  label: { fontSize: '12px', fontWeight: 'bold' },
  serviceInput: { padding: '3px', border: '1px solid #ccc', width: '150px' },
  formContainer: { padding: '20px' },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
  },
  column: { display: 'flex', flexDirection: 'column', gap: '6px' },
  fieldRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  fieldLabel: { fontSize: '11px', color: '#555', width: '90px' },
  input: { padding: '2px 5px', fontSize: '12px', border: '1px solid #ccc', width: '140px' },
  photoContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' },
  photoBox: { width: '100px', height: '110px', border: '1px solid #ccc', backgroundColor: '#f5f5f5', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  browseBtn: { marginTop: '5px', fontSize: '10px', padding: '2px 10px', cursor: 'pointer' },
  tabsContainer: { display: 'flex', padding: '0 20px' },
  tab: { padding: '5px 15px', fontSize: '11px', border: '1px solid #ccc', borderBottom: 'none', backgroundColor: '#f0f0f0', cursor: 'pointer', marginRight: '2px' },
  activeTab: { backgroundColor: '#fff', borderTop: '2px solid #87ceeb', fontWeight: 'bold' },
  tabContent: { margin: '0 20px', border: '1px solid #ccc', padding: '20px', backgroundColor: '#fff' },
  serviceGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px 20px' },
};