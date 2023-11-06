import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import Works from './pages/Works';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element= {<Home/>}></Route>
       <Route  path='/works' element= {<Works/>}></Route>
         {/*<Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/about' element= {<About/>}></Route> */}
        
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
