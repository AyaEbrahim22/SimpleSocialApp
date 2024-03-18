import React from 'react'
import style from './CloseFriends.module.css'

export default function CloseFriends({users}) {
    return <>

    {users.map((user,index) => <li key={index} className={style.sidebarFriend} role='button'>
      <img src={user.profilePicture} alt='friend img' className={style.sidebarFriendImg} />
      <span className={`${style.sidebarFriendName} ms-2`}>{user.username}</span>
  </li>
    
    )}
      

    </>
}
