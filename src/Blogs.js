import {  NavLink, Outlet } from "react-router-dom"

function Blogs() {
  return (
        <div className='App'>
          <div className='create content'>
          <div className="center">
             <NavLink to='blog-1'> Blog 1</NavLink>
             <NavLink to='blog-2'> Blog 2</NavLink>
          </div>
           <br/>
           <br/>
           <br/>
           <Outlet/>
          </div>
          
      </div>
  )
}

export default Blogs