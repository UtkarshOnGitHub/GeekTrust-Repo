import AllRoutes from './Allroutes/AllRoutes';
import Home from './Allroutes/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
