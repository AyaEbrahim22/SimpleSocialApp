import React from 'react'
import style from '../Sidebar/Sidebar.module.css'
import friendImg from '../../assets/person/2.jpeg'
import {Users} from '../../dummyData'
import CloseFriends from '../CloseFriends/CloseFriends'

export default function Sidebar() {
  return <>
    <div className={style.sidebar}>
        <div className={style.sidebarWrapper}>
            <ul className={style.sidebarList}>
               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-rss me-3"></i>
               <span className={style.sidebarListItemText}>Feed</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-message me-3"></i>
               <span className={style.sidebarListItemText}>Chats</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-circle-play me-3"></i>
               <span className={style.sidebarListItemText}>Videos</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-user-group me-3"></i>
               <span className={style.sidebarListItemText}>Groups</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-bookmark me-3"></i>
               <span className={style.sidebarListItemText}>BookMarks</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-regular fa-circle-question me-3"></i>
               <span className={style.sidebarListItemText}>Questions</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-briefcase me-3"></i>
               <span className={style.sidebarListItemText}>Jobs</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-regular fa-calendar me-3"></i>
               <span className={style.sidebarListItemText}>Events</span>
               </li>

               <li className={style.sidebarListItem}>
               <i className="fa-solid fa-graduation-cap me-3"></i>               
               <span className={style.sidebarListItemText}>Courses</span>
               </li>
            </ul>

            <button className={`${style.sidebarButton}`}>Show More</button>

            <hr className={style.sidebarHr}/>

            <ul className='m-0 p-0 mb-2'>

                  {<CloseFriends users={Users}/>}
             
            </ul>
        </div>
    </div>
  </>
}
