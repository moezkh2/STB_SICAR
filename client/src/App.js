import './App.css';
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
