import React from 'react';

const AmbienteSelector = ({ value, onChange }) => (
  <div style={styles.box}>
    <label style={styles.label}>Ambiente di installazione:</label>
    <select style={styles.select} value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Seleziona --</option>
      <option value="Civile">Civile</option>
      <option value="Terziario/Industriale">Terziario/Industriale</option>
    </select>
  </div>
);

const styles = {
  label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
  box: { marginBottom: '20px' }
};

export default AmbienteSelector;