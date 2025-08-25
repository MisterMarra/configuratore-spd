import React from 'react';

const ProtezioneSelector = ({ value, onChange }) => (
  <div style={styles.box}>
    <label style={styles.label}>Tipo di protezione richiesta:</label>
    <select style={styles.select} value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Seleziona --</option>
      <option value="Tipo 1">Tipo 1</option>
      <option value="Tipo 2">Tipo 2</option>
      <option value="Tipo 1+2">Tipo 1+2</option>
      <option value="Tipo 2+3">Tipo 2+3</option>
    </select>
  </div>
);

const styles = {
  label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
  box: { marginBottom: '20px' }
};

export default ProtezioneSelector;