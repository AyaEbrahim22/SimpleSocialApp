import style from './ProfileRightbar.module.css'
import friendImg1 from '../../assets/person/9.jpeg'
import friendImg2 from '../../assets/person/8.jpeg'
import friendImg3 from '../../assets/person/7.jpeg'
import friendImg4 from '../../assets/person/6.jpeg'
import friendImg5 from '../../assets/person/1.jpeg'
import friendImg6 from '../../assets/person/10.jpeg'

export default function ProfileRightbar() {
   
   return <>

<div className={style.rightbar}>
      <div className={style.rightbarWrapper}>
     

      <h4 className={style.rightbarTitle}>User Information</h4>
    <div className={style.rightbarInfo}>

      <div className={style.rightbarInfoItem}>
        <span className={style.rightbarInfoKey}>City: </span>
        <span className={style.rightbarInfoValue}>New York</span>
      </div>

      <div className={style.rightbarInfoItem}>
        <span className={style.rightbarInfoKey}>From: </span>
        <span className={style.rightbarInfoValue}>Madrid</span>
      </div>

      <div className={style.rightbarInfoItem}>
        <span className={style.rightbarInfoKey}>RelationShip: </span>
        <span className={style.rightbarInfoValue}>Single</span>
      </div>
    </div>

    <h4 className='rightbarTitle text-center mb-3'>User Friends</h4>

    <div className='row rightbarFollowings g-3'>
      
      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg1} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>

      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg2} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>

      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg3} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>

      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg4} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>

      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg5} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>

      <div className='col-md-4 rightbarFollowing'>
        <img src={friendImg6} alt='Friend Img' className={style.rightbarFollowingImg}/>
        <span className="rightbarFollowingName ms-3">Jomana domi</span>
      </div>


    </div>

      </div>
    </div>


    
    
    </>
}
