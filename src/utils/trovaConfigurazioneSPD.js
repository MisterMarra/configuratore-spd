// src/utils/trovaConfigurazioneSPD.js

import { configurazioniSPD } from '../data/configurazioniSPD';

// 🔧 Funzione di normalizzazione potenziata
const normalizza = (val) =>
  val?.toString().replace(/[\s–—\-\/]/g, '').toUpperCase();

export function trovaConfigurazioneSPD({ lps, livello, fase, ambiente, linea, interruttorePresente }) {
  const risultato = configurazioniSPD.find(cfg =>
    cfg.lps === lps &&
    cfg.fase === fase &&
    cfg.ambiente === ambiente &&
    cfg.linea === linea &&
    cfg.interruttorePresente === interruttorePresente &&
    (lps === "Sì" ? normalizza(cfg.livello) === normalizza(livello) : true)
  );

  return risultato || {
    modello: "Nessuna configurazione trovata",
    tipo: "-",
    articolo: "-",
    descrizione: "Questa combinazione non è ancora definita.",
    link: ""
  };
}