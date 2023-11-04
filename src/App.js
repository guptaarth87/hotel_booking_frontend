
import './App.css';
import {Routes , Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import CheckAvailability from './Pages/CheckAvailability';
import BookPage from './Pages/BookPage';

function App() {
  return (
    <div className="App">
       <main>  
      <Routes>
       
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/roomdetails' element={<RoomDetails/>}/>
         <Route path='/checkavailability' element={<CheckAvailability/>}/>
         <Route path='/bookroom' element={<BookPage/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
