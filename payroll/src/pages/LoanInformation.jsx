import React, { useState } from 'react';

export default function LoanInformation() {
  return (
    <div style={styles.contentWrapper}>
      {/* Blue Header Bar */}
      <div style={styles.headerBar}>
        <span style={styles.headerTitle}>Service Personal Profile - Sri Lanka Air Force</span>
        <div style={styles.searchBox}>
          <span style={{ fontSize: '11px', color: '#333' }}>Officer Search... 🔍</span>
        </div>
      </div>

      {/* Top Section: Service Number and Item Code List */}
      <div style={styles.topSection}>
        <div style={styles.serviceRow}>
          <label style={styles.label}>Service Number</label>
          <input type="text" placeholder="Enter Service No." style={styles.serviceInput} />
          <div style={styles.smallBox}></div>
        </div>

        <div style={styles.itemCodeListContainer}>
          <div style={styles.itemCodeHeader}>Item Code</div>
          <div style={styles.listBox}>
            {/* List items would be mapped here */}
          </div>
        </div>
      </div>

      {/* Main Form Content with Sidebar Buttons */}
      <div style={styles.mainLayout}>
        <div style={styles.formArea}>
          {/* General Loan Info */}
          <div style={styles.sectionGrid}>
            <div style={styles.column}>
              <div style={styles.fieldRow}><label style={styles.fLabel}>Short Description</label><input type="text" style={styles.input} /></div>
              <div style={styles.fieldRow}><label style={styles.fLabel}>Long Description</label><input type="text" style={styles.input} /></div>
              <div style={styles.fieldRow}>
                <label style={styles.fLabel}>Shedule Start Date</label>
                <input type="text" defaultValue="2021/7/26" style={styles.input} />
              </div>
              <div style={styles.fieldRow}><label style={styles.fLabel}>Is Gurantor</label><input type="text" style={styles.input} /></div>
              <div style={styles.fieldRow}><label style={styles.fLabel}>Applicant No</label><input type="text" style={styles.input} /></div>
            </div>

            <div style={styles.column}>
               <div style={styles.fieldRow}><label style={styles.fLabel}>Value Type</label><input type="text" style={styles.input} /></div>
               <div style={styles.fieldRow}><label style={styles.fLabel}>Status</label><input type="text" style={styles.input} /></div>
               <div style={styles.fieldRow}>
                 <label style={styles.fLabel}>Shedule End Date</label>
                 <input type="text" defaultValue="2023/7/25" style={styles.input} />
               </div>
               <div style={styles.fieldRow}><label style={styles.fLabel}>Authority</label><input type="text" style={styles.input} /></div>
            </div>
          </div>

          {/* Interest & Installment Section */}
          <div style={styles.borderedSection}>
            <div style={styles.sectionGrid}>
              <div style={styles.column}>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Interest Item Code</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Loan Amount</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Interest Date</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>No Of Installment</label><input type="text" style={styles.input} /></div>
              </div>
              <div style={styles.column}>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Outstanding Amount</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>No of Installment Paid</label><input type="text" style={styles.input} /></div>
              </div>
              <div style={styles.column}>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Capital First</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Capital Normal</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Capital Last</label><input type="text" style={styles.input} /></div>
              </div>
            </div>
          </div>

          {/* Bank & Settlement Section */}
          <div style={styles.borderedSection}>
            <div style={styles.sectionGrid}>
              <div style={styles.column}>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Bank</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Bank Branch</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Account No</label><input type="text" style={styles.input} /></div>
              </div>
              <div style={styles.column}>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Outstanding installment</label><input type="text" style={styles.input} /></div>
                <div style={styles.fieldRow}><label style={styles.fLabel}>Outstanding interest amount</label><input type="text" style={styles.input} /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Column */}
        <div style={styles.buttonColumn}>
          <button style={styles.actionBtn}>Add</button>
          <button style={styles.actionBtn}>Edit</button>
          <button style={styles.actionBtn}>Delete</button>
          <div style={{ height: '40px' }}></div>
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
  headerTitle: { color: '#fff', fontSize: '13px', fontWeight: 'bold' },
  searchBox: { backgroundColor: '#fff', padding: '2px 8px', borderRadius: '2px' },
  
  topSection: { padding: '20px 40px', borderBottom: '1px solid #ddd' },
  serviceRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' },
  label: { fontSize: '12px', fontWeight: 'bold' },
  serviceInput: { padding: '3px', border: '1px solid #ccc', width: '150px' },
  smallBox: { width: '40px', height: '22px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' },

  itemCodeListContainer: { marginLeft: '60px' },
  itemCodeHeader: { width: '100px', fontSize: '11px', border: '1px solid #ccc', borderBottom: 'none', padding: '2px 10px', backgroundColor: '#fff' },
  listBox: { width: '400px', height: '100px', border: '1px solid #87ceeb', backgroundColor: '#fff' },

  mainLayout: { display: 'flex', padding: '20px 40px', flex: 1 },
  formArea: { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' },
  sectionGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' },
  column: { display: 'flex', flexDirection: 'column', gap: '8px' },
  fieldRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' },
  fLabel: { fontSize: '11px', color: '#333', textAlign: 'right', flex: 1 },
  input: { width: '140px', padding: '2px 5px', border: '1px solid #ccc', fontSize: '12px' },

  borderedSection: { borderTop: '2px solid #87ceeb', paddingTop: '15px', marginTop: '10px' },
  
  buttonColumn: { width: '150px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px', paddingTop: '50px' },
  actionBtn: { padding: '3px 15px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '3px', fontSize: '12px', cursor: 'pointer', boxShadow: '1px 1px 2px #ddd' },

  sysFooter: { backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }
};