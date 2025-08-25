import { useState } from 'react';
import { trovaConfigurazioneSPD } from '../utils/trovaConfigurazioneSPD';

function TrovaSPDForm() {
  const [risultato, setRisultato] = useState(null);

  function handleTrovaSPD() {
    const selezione = {
      lps: "Sì",
      livello: "I-II",
      fase: "Trifase",
      ambiente: "Civile",
      linea: "Aerea"
    };

    const config = trovaConfigurazioneSPD(selezione);
    setRisultato(config);
  }

  return (
    <div>
      <button onClick={handleTrovaSPD}>Trova SPD</button>

      {risultato && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>{risultato.modello}</h3>
          <p>{risultato.descrizione}</p>
          <p><strong>Articolo:</strong> {risultato.articolo}</p>
          <p><strong>Tipo:</strong> {risultato.tipo}</p>
          {risultato.link && <a href={risultato.link} target="_blank">Scheda tecnica</a>}
        </div>
      )}
    </div>
  );
}

export default TrovaSPDForm;