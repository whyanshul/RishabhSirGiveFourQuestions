//router
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactUsPage from './components/ContactUs/ContactUs';
import GetDetails from './components/GetDetails/GetDetails.component';
import TakeDetails from './components/TakeDetails/TakeDetails.component';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact-us' element={<ContactUsPage/>}/>
        <Route path='GetDetails' element={< GetDetails/>}/>
        <Route path='TakeDetails' element={< TakeDetails/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;