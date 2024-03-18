import style from './OnlineFriends.module.css'



export default function OnlineFriends({users}) {
   
   return <>

   {users.map((user,index)=>  <li key={index} className={style.rightbarFriend} role='button'>
            <div className={style.rightbarProfileImgContainer}>
                <img className={style.rightbarProfileImg} src={user.profilePicture} alt='profile Img' />
                <span className={style.rightbarOnline}></span>
            </div>
            <span className={style.righbarUserName}>{user.username}</span>
        </li>
   )}

    </>
}
