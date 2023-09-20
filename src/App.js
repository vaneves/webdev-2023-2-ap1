import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function aoAlterarCep(evento) {
    const cep = evento.target.value;
    if (cep != null && cep.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/` + cep)
        .then(function (resposta) {
          
          const endereco = resposta.data;
          console.log(endereco);
          setRua(endereco.street);
          setBairro(endereco.neighborhood);
          setCidade(endereco.city);
          setUf(endereco.state);
        })
    }
  }

  return (
    <div>
      <form className='form'>
        <div id="cep">
          <label>CEP:</label>
          <input type="text" onChange={aoAlterarCep} />
        </div>
        <div id="rua">
          <label>Rua:</label>
          <input type="text" value={rua} readOnly />
        </div>
        <div id="numero">
          <label>Número:</label>
          <input type="text" />
        </div>
        <div id="bairro">
          <label>Bairro:</label>
          <input type="text" value={bairro} readOnly />
        </div>
        <div id="cidade">
          <label>Cidade:</label>
          <input type="text" value={cidade} readOnly />
        </div>
        <div id="uf">
          <label>UF:</label>
          <input type="text" value={uf} readOnly />
        </div>
      </form>
    </div>
  );
}

export default App;
