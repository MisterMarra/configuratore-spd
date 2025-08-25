import React, { useState } from 'react';
import { trovaConfigurazioneSPD } from '../utils/trovaConfigurazioneSPD';

function SPDForm() {
  const [lps, setLps] = useState("");
  const [livello, setLivello] = useState("");
  const [fase, setFase] = useState("");
  const [impianto, setImpianto] = useState("");
  const [linea, setLinea] = useState("");
  const [interruttorePresente, setInterruttorePresente] = useState("");
  const [risultato, setRisultato] = useState(null);

  function handleTrovaSPD() {
    const selezione = {
      lps,
      livello,
      fase,
      ambiente: impianto,
      linea,
      interruttorePresente,
    };
    const config = trovaConfigurazioneSPD(selezione);
    setRisultato(config);
  }

  const isFormCompleto = () => {
    const base = lps && fase && impianto && linea;
    const conLivello = lps === "Sì" ? livello : true;
    const conInterruttore = interruttorePresente;
    return base && conLivello && conInterruttore;
  };

  // 🔍 Calcolo soglia interruttore secondo la logica
  const sogliaInterruttore =
    lps === "No" && linea === "Interrata" ? "≤ 63 A" : "≤ 80 A";

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Seleziona i parametri</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Protezione contro scariche dirette (LPS):</label><br />
        <select value={lps} onChange={e => setLps(e.target.value)}>
          <option value="">-- Seleziona --</option>
          <option value="Sì">Sì</option>
          <option value="No">No</option>
        </select>
      </div>

      {lps === "Sì" && (
        <div style={{ marginBottom: '1rem' }}>
          <label>Categoria di fulminazione:</label><br />
          <select value={livello} onChange={e => setLivello(e.target.value)}>
            <option value="">-- Seleziona --</option>
            <option value="I-II">I-II</option>
            <option value="III-IV">III-IV</option>
          </select>
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <label>Tipo di impianto:</label><br />
        <select value={impianto} onChange={e => setImpianto(e.target.value)}>
          <option value="">-- Seleziona --</option>
          <option value="Civile">Civile</option>
          <option value="Terziario/Industriale">Terziario/Industriale</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Tipo di impianto elettrico:</label><br />
        <select value={fase} onChange={e => setFase(e.target.value)}>
          <option value="">-- Seleziona --</option>
          <option value="Monofase">Monofase</option>
          <option value="Trifase">Trifase</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Tipo di linea:</label><br />
        <select value={linea} onChange={e => setLinea(e.target.value)}>
          <option value="">-- Seleziona --</option>
          <option value="Aerea">Aerea</option>
          <option value="Interrata">Interrata</option>
        </select>
      </div>

      {/* ✅ Interruttore generale: soglia dinamica + scelta utente */}
      {sogliaInterruttore && (
        <div style={{ marginBottom: '1rem' }}>
          <label>Interruttore generale {sogliaInterruttore}:</label><br />
          <select
            value={interruttorePresente}
            onChange={e => setInterruttorePresente(e.target.value)}
          >
            <option value="">-- Seleziona --</option>
            <option value="Sì">Sì</option>
            <option value="No">No</option>
          </select>
        </div>
      )}

      <button onClick={handleTrovaSPD} disabled={!isFormCompleto()}>
        Trova SPD
      </button>

      {risultato && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>{risultato.modello}</h3>
          <p>{risultato.descrizione}</p>
          <p><strong>Articolo:</strong> {risultato.articolo}</p>
          <p><strong>Tipo:</strong> {risultato.tipo}</p>
          {risultato.link && (
            <p>
              <a href={risultato.link} target="_blank" rel="noopener noreferrer">
                Scheda tecnica
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SPDForm;