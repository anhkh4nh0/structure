import './App.sass';
import Home from './components/Home/home'

function App() {
  return (
    <>
      <header className="App-header">
        <div className="logo">
          <img src="../img/subtract.svg" alt="" />
          <span>TripGuide</span>
        </div>
        <div className="account">
          <div className="icon">
            <div className="language">
              <p>USD</p>
            </div>
            <div className="flag">
              <img src="../img/flag.png" alt="" />
              <img src="../img/Shape.svg" alt="" />
              <span>1</span>
            </div>
            {/* <div className="bell">
            </div> */}
          </div>
          <div className="user">
            <div className="avt">
              <img src="../img/Rectangle.png" alt="" />
            </div>
            <span>Delowar</span>
            <img src="../img/Rectangle.svg" alt="" />
          </div>
        </div>
      </header>
      <Home />
    </>
  );
}

export default App;
