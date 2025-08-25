import React from 'react';

const RisultatoSPD = ({ modello }) => (
  <div style={styles.box}>
    <h3>SPD consigliato:</h3>
    {modello ? <p>{modello}</p> : <p>Completa la configurazione per vedere il risultato.</p>}
  </div>
);

const styles = {
  box: { backgroundColor: '#e6ffe6', padding: '15px', borderRadius: '5px', border: '1px solid #b2d8b2' }
};

export default RisultatoSPD;