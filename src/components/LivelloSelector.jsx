import React from 'react';

const LivelloSelector = ({ value, onChange }) => (
  <div style={styles.box}>
    <label style={styles.label}>Livello LPS:</label>
    <select style={styles.select} value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Seleziona --</option>
      <option value="I–II">I–II</option>
      <option value="III–IV">III–IV</option>
    </select>
  </div>
);

const styles = {
  label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
  box: { marginBottom: '20px' }
};

export default LivelloSelector;