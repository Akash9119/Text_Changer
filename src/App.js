import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title={"Text Changer"} />
      <div className="container my-3">
      {/* <TextForm heading={"Enter Text To Enalyze"} /> */}
      <About />
      </div>
    </div>
  );
}

export default App;
