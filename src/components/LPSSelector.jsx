import React from 'react';

const LPSSelector = ({ value, onChange }) => (
  <div style={styles.box}>
    <label style={styles.label}>Presenza di LPS:</label>
    <select style={styles.select} value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Seleziona --</option>
      <option value="Sì">Sì</option>
      <option value="No">No</option>
    </select>
  </div>
);

const styles = {
  label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
  box: { marginBottom: '20px' }
};

export default LPSSelector;