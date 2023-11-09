
import './App.css';
import {Routes , Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import CheckAvailability from './Pages/CheckAvailability';
import BookPage from './Pages/BookPage';
import AboutUs from './Pages/AboutUs';
import Pay from './Components/Payment/Pay';
import Loader from './Components/Loader/Loader';

function App() {
  return (
    <div className="App">
       <main>  
      <Routes>
       
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/roomdetails' element={<RoomDetails/>}/>
         <Route path='/checkavailability' element={<CheckAvailability/>}/>
         <Route path='/bookroom' element={<BookPage/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/payment' element={<Pay/>} />
         <Route path='/loader' element={<Loader/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
