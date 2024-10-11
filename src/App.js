import logo from './logo.svg';
import './App.scss';
import { Routes,Route } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './components/navbar'


function App() {
  
  return (
    <div className="App">
      {}
      <Navbar/>
      {}
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/portfolio' element={<Portfolio/>}/>
        <Route  path='/skills' element={<Skills/>}/>
      </Routes>

      </div>
    
     
    </div>
  );
}

export default App;
