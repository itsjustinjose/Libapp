import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
