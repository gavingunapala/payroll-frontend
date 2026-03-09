import React, { useState } from 'react';

export default function IncrementProcess() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div style={styles.contentWrapper}>
      {/* Sky Blue Header */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Process Module - Annual Increment</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Main Process Area */}
      <div style={styles.mainArea}>
        <div style={styles.processCard}>
          <div style={styles.cardHeader}>Run Annual Increment Process</div>
          
          <div style={styles.cardBody}>
            {/* Year/Month Selection */}
            <div style={styles.fieldRow}>
              <label style={styles.label}>Select Process Period</label>
              <div style={styles.inputGroup}>
                <span style={styles.smallLabel}>Year</span>
                <input type="text" style={styles.smallInput} defaultValue="2026" />
                <span style={styles.smallLabel}>Month</span>
                <input type="text" style={styles.smallInput} defaultValue="03" />
              </div>
            </div>

            {/* Progress and Status */}
            <div style={styles.statusBox}>
              <div style={styles.statusRow}>
                <span>System Date:</span>
                <strong>09/03/2026</strong>
              </div>
              <div style={styles.statusRow}>
                <span>Eligible Records:</span>
                <span style={{color: '#0056b3', fontWeight: 'bold'}}>412 Officers</span>
              </div>
            </div>

            {/* Console/Log View */}
            <div style={styles.console}>
              <div style={styles.logText}>[System] Ready to update pay scales...</div>
              {isRunning && (
                <>
                  <div style={styles.logText}>[Action] Fetching eligible service numbers...</div>
                  <div style={styles.logText}>[Update] Applying rank-based increments...</div>
                  <div style={styles.logProgress}>Processing: 45%</div>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonRow}>
              <button 
                style={isRunning ? styles.btnDisabled : styles.btnRun} 
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
              >
                {isRunning ? 'Processing...' : 'Run Increment'}
              </button>
              <button style={styles.btnCancel} onClick={() => setIsRunning(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sky Blue Footer */}
      <div style={styles.sysFooter}>
        All Right receved 2026- information technology unit
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
    fontFamily: 'Segoe UI, Arial, sans-serif'
  },
  headerBar: { 
    backgroundColor: '#87ceeb', 
    padding: '8px 20px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  headerTitle: { color: '#444', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px', border: '1px solid #ccc' },
  
  mainArea: { 
    flex: 1, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f0f2f5',
    padding: '20px'
  },
  processCard: { 
    width: '450px', 
    backgroundColor: '#fff', 
    border: '1px solid #87ceeb', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '4px'
  },
  cardHeader: { 
    backgroundColor: '#87ceeb', 
    color: '#fff', 
    padding: '10px', 
    fontWeight: 'bold', 
    textAlign: 'center',
    fontSize: '14px'
  },
  cardBody: { padding: '25px' },
  
  fieldRow: { marginBottom: '20px' },
  label: { fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '8px' },
  inputGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  smallLabel: { fontSize: '11px', color: '#666' },
  smallInput: { width: '60px', padding: '4px', border: '1px solid #ccc', textAlign: 'center' },

  statusBox: { 
    backgroundColor: '#e8f4f8', 
    padding: '10px', 
    borderRadius: '4px', 
    border: '1px solid #bde0eb',
    marginBottom: '20px'
  },
  statusRow: { display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' },

  console: { 
    backgroundColor: '#1e1e1e', 
    height: '100px', 
    padding: '10px', 
    borderRadius: '4px', 
    overflowY: 'auto',
    marginBottom: '25px'
  },
  logText: { color: '#00ff00', fontSize: '11px', fontFamily: 'monospace', marginBottom: '4px' },
  logProgress: { color: '#ffd700', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' },

  buttonRow: { display: 'flex', justifyContent: 'center', gap: '15px' },
  btnRun: { backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '8px 25px', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' },
  btnDisabled: { backgroundColor: '#94d3a2', color: '#fff', border: 'none', padding: '8px 25px', borderRadius: '3px', cursor: 'not-allowed' },
  btnCancel: { backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '8px 25px', borderRadius: '3px', cursor: 'pointer' },

  sysFooter: { 
    backgroundColor: '#87ceeb', 
    textAlign: 'right', 
    padding: '8px 20px', 
    fontSize: '11px', 
    fontWeight: 'bold',
    marginTop: 'auto' 
  }
};