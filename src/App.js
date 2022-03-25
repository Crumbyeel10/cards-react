import logo from './logo.svg';
import './App.css';
import './Components/Button'
import Button from './Components/Button';
import Card from './Components/Card';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card clase='Datos'  var1="Diego" var2="25 años" var3="Colombia" back="green"/>
        <Card clase='Hobbie' var1="Netflix" var2="jugar Xbox" var3="Estudiar" back="red"/>
        <Card clase='Peliculas favoritas' var1="Efecto Mariposa" var2="Marvel"/>
        <Card back="violet"/>
      </header>
    </div>
  );
}

export default App;
