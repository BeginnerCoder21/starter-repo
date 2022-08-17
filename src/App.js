import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card title="Card1" content="My first card"/>
      {/* <Card title="Card2" content="My second card"/> */}
    </div>
  );
}

export default App;
