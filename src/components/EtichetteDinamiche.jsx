import React from 'react';

const EtichetteDinamiche = ({ config }) => (
  <div style={styles.box}>
    <h4>Configurazione selezionata:</h4>
    <ul>
      {Object.entries(config).map(([key, value]) => (
        <li key={key}><strong>{key}:</strong> {value || '—'}</li>
      ))}
    </ul>
  </div>
);

const styles = {
  box: { backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '20px' }
};

export default EtichetteDinamiche;