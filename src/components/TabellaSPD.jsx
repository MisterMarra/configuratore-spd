import React from 'react';
import { configurazioniSPD } from '../data/configurazioniSPD';

const TabellaSPD = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Configurazioni SPD</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Articolo</th>
            <th>Descrizione</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {configurazioniSPD.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tipo}</td>
              <td>{item.articolo}</td>
              <td>{item.descrizione}</td>
              <td>
                {Array.isArray(item.link)
                  ? item.link.map((l, i) => (
                      <a key={i} href={l} target="_blank" rel="noopener noreferrer">
                        Link {i + 1}
                      </a>
                    ))
                  : <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabellaSPD;