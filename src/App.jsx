import React from 'react';
import SPDForm from './pages/SPDForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        {/* Logo DEHN ingrandito */}
        <img
          src="/dehn-logo.png"
          alt="Logo DEHN"
          style={{
            maxWidth: '375px',
            height: 'auto',
            marginBottom: '1rem'
          }}
        />
        <h1>Configuratore SPD</h1>
      </header>
      <main style={styles.main}>
        <SPDForm />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#D80027', // rosso DEHN
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
  },
  main: {
    padding: '2rem'
  }
};

export default App;