
import './App.css';
import {Routes , Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
       <main>  
      <Routes>
       
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/>
       */}
      </Routes>
     </main>
    </div>
  );
}

export default App;
