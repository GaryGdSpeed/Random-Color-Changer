
import './App.css';

function App() {

  const changeColor = () => {
    let R = Math.random() * 256;
    let G = Math.random() * 256;
    let B = Math.random() * 256;
    document.getElementById("main-app").style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }

  return (
    <main id="main-app">
      <div id="button-container">
        <button id="button" onClick={changeColor}>Change Color</button>
      </div>
    </main>
  );
}

export default App;
