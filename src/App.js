import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import Works from './pages/work';
import About from './pages/About'
import ScrollToTop from './pages/ScrollToTop';
import Resume from './pages/Resume';
function App() {
  return (
    <BrowserRouter basename='/'>
    <ScrollToTop/>
    <Routes>
      <Route forceRefresh={true} path="/" element={<Layout/>}>
      <Route forceRefresh={true} index element= {<Home/>}></Route>
      <Route forceRefresh={true} path='/works' element= {<Works/>}></Route>
      <Route forceRefresh={true} path='/about' element= {<About/>}></Route>
      <Route forceRefresh={true} path='/resume' element= {<Resume/>}></Route>
         {/*<Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/about' element= {<About/>}></Route> */}
        
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
