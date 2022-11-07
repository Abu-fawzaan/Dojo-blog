import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  Create  from "./Create";
import BlogDetails from './blogDetails';
import NotFound from './NotFound';
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}>
             
            </Route>
            <Route path='/Create' element={<Create/>}>
             
            </Route>
            <Route path='/blogs/:id' element={<BlogDetails/>}>
             
            </Route>
            <Route path='*' element={<NotFound/>}>
              </Route>
          </Routes>    
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
