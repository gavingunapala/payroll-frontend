import React, { useState } from 'react';

const HalfPaySchedule = () => {
  const [selectedDays, setSelectedDays] = useState(new Array(31).fill(false));

  const toggleDay = (index) => {
    const newDays = [...selectedDays];
    newDays[index] = !newDays[index];
    setSelectedDays(newDays);
  };

  const totalSelected = selectedDays.filter(day => day).length;

  // Inline Styles to force the grid
  const styles = {
    mainLayout: { display: 'flex', padding: '20px 40px', alignItems: 'flex-start', gap: '20px' },
    formArea: { flex: 1, maxWidth: '600px' },
    daysGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)', // FORCES 7 COLUMNS
      gap: '10px',
      border: '1px solid #87ceeb',
      padding: '15px',
      borderRadius: '4px',
      backgroundColor: '#fff',
      marginTop: '10px'
    },
    dayItem: { display: 'flex', alignItems: 'center', gap: '5px' },
    summarySection: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' },
    summaryRow: { display: 'flex', alignItems: 'center' },
    label: { fontSize: '11px', fontWeight: 'bold', minWidth: '100px' }
  };

  return (
    <div className="content-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#87ceeb', padding: '8px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Half Pay Schedule</span>
        <div style={{ backgroundColor: '#fff', padding: '2px 8px' }}>Officer Search... 🔍</div>
      </div>

      <div style={styles.mainLayout}>
        <div style={styles.formArea}>
          {/* Service No Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <span style={styles.label}>Service No</span>
            <input type="text" style={{ width: '150px', border: '1px solid #ccc' }} />
          </div>

          {/* Grid Container */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#0056b3' }}>Half Pay Days</div>
            <div style={styles.daysGrid}>
              {selectedDays.map((isSelected, i) => (
                <div key={i} style={styles.dayItem}>
                  <input 
                    type="checkbox" 
                    checked={isSelected} 
                    onChange={() => toggleDay(i)} 
                  />
                  <span style={{ fontSize: '11px' }}>{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div style={styles.summarySection}>
            <div style={styles.summaryRow}>
              <span style={styles.label}>Total Days</span>
              <input type="text" style={{ width: '80px', border: '1px solid #ccc' }} value={totalSelected} readOnly />
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.label}>Authority</span>
              <input type="text" style={{ width: '300px', border: '1px solid #ccc' }} placeholder="Enter authority..." />
            </div>
          </div>
        </div>

        {/* Buttons Sidebar */}
        <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' }}>
          {['Add', 'Edit'].map(text => <button key={text} style={{ padding: '4px', border: '1px solid #ccc', cursor: 'pointer' }}>{text}</button>)}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input type="checkbox" id="del" />
            <label htmlFor="del" style={{ fontSize: '10px' }}>Delete Records</label>
          </div>
          <button style={{ padding: '4px', border: '1px solid #ccc' }}>Delete</button>
          <div style={{ height: '80px' }}></div>
          <button style={{ padding: '4px', border: '1px solid #ccc' }}>Reset</button>
          <button style={{ padding: '4px', border: '1px solid #ccc' }}>Back</button>
        </div>
      </div>

      <footer style={{ backgroundColor: '#87ceeb', textAlign: 'right', padding: '8px 20px', fontSize: '11px', fontWeight: 'bold', marginTop: 'auto' }}>
        All Right received 2026 - information technology unit
      </footer>
    </div>
  );
};

export default HalfPaySchedule;