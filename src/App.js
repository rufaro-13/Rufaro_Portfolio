import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import Works from './pages/work';
import ScrollToTop from './pages/ScrollToTop';
function App() {
  return (
    <BrowserRouter basename='/'>
    <ScrollToTop/>
    <Routes>
      <Route forceRefresh={true} path="/" element={<Layout/>}>
      <Route forceRefresh={true} index element= {<Home/>}></Route>
      <Route forceRefresh={true} path='/works' element= {<Works/>}></Route>
         {/*<Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/about' element= {<About/>}></Route> */}
        
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
