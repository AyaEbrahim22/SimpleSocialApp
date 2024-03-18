import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed.jsx'
import Rightbar from '../Rightbar/Rightbar.jsx'
import style from './Home.module.css'



export default function Home() {
  return <>
  <Topbar/>

  <div className={style.homeContainer}>
  <Sidebar/>
  <Feed/>
  <Rightbar/>
  </div>
  
  
  
  </>
   
}
