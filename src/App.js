import './App.css';
import Pesquisa from './Pesquisa'

function App() {
  return (
    <div className="App">
    <div id="titulo"><center><h1><font color="Snow">Conversão de Moedas</font></h1></center></div>
     <Pesquisa moedaA="USD" cor="#DDA0DD"/>
     <Pesquisa moedaA="EUR" cor="#87CEEB"/>
     <Pesquisa moedaA="CAD" cor="#00FA9A"/>
     <Pesquisa moedaA="GBP" cor="#D8BFD8"/>
    </div>
  );
}

export default App;
