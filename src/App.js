import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Blog1 from './Blog-1';
import Blog2 from './Blog-2';
import BlogDetails from './BlogDetails';
import Blogs from './Blogs';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Blogs' element={<Blogs/>}>
              <Route index element={<Blog1/>}/>
              <Route path='blog-1' element={<Blog1/>}/>
              <Route path='blog-2' element={<Blog2/>}/>
            </Route>
            <Route path='/blog/:id' element={<BlogDetails/>}/>
            <Route path='/add-blogs' element={<Create/>}/>
            
            <Route path='*' element={<div className='content'><h1> PAGE NOT FOUND </h1></div>}/>
        </Routes>
    </Router>
  )
}

export default App