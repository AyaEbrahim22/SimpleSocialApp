import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed.jsx'
import style from './Profilecss.module.css'
import coverImg from '../../assets/post/3.jpeg'
import userImg from '../../assets/person/7.jpeg'
import ProfileRightbar from '../ProfileRightbar/ProfileRightbar.jsx'

export default function Profile() {
    return <>
        <Topbar />

        <div className={style.profile}>
            <Sidebar />
            <div className={style.profileRight}>
                <div className="profileRightTop">

                    <div className={style.profileCover}>
                        <img src={coverImg} alt='Cover Img' className={style.profileCoverImg}/>
                        <img src={userImg} alt='User Img' className={style.profileUserImg}/>
                    </div>

                    <div className="profileInfo text-center">
                        <h3 className='mb-0 fw-bold'>John Carter</h3>
                        <span>Hello my friends!</span>
                    </div>

                </div>
                <div className={style.profileRightBottom}>
                    <Feed />
                   <ProfileRightbar/>
                </div>
            </div>
        </div>

    </>
}









