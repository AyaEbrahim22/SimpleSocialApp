import React from 'react'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'






export default function App() {



 let routers =  createHashRouter([
  {path:'home' , element: <Home/>} ,
  {path:'profile' , element: <Profile/>},
  {index: true , element: <Login/>},
  {path: 'register' , element: <Register/>},
 
 ])



  return (

    <RouterProvider router={routers}>
      {/* <Profile/> */}
    </RouterProvider>

  )
}
