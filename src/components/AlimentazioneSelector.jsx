import React from 'react';

const AlimentazioneSelector = ({ value, onChange }) => (
  <div style={styles.box}>
    <label style={styles.label}>Tipo di alimentazione:</label>
    <select style={styles.select} value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Seleziona --</option>
      <option value="Monofase">Monofase</option>
      <option value="Trifase">Trifase</option>
    </select>
  </div>
);

const styles = {
  label: { fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
  box: { marginBottom: '20px' }
};

export default AlimentazioneSelector;