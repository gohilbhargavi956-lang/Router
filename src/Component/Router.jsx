import React from 'react'
import{createBrowserRouter ,RouterProvider} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Product from './Product'

const router = createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div> 
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/contact",
    element:<div>
      <Navbar/>
      <Contact/>
    </div>
  },
  {
    path:"/product/:id",
    element:<div>
      <Navbar/>
      <Product/>
    </div>
  },
  {
    path:"/products",
    element:<div>
      <Navbar/>
      <Products/>
    </div>
  }
])
const Router = () => {
  return (
    <div className='page'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router