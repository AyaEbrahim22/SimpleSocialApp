
import style from '../Topbar/topbar.module.css'

import img1 from '../../assets/person/1.jpeg'
import { Link, useNavigate } from 'react-router-dom'

export default function Topbar() {

    let navigate = useNavigate()

    return <>

        <div className={style.topbarContainer}>

            <div className={style.topbarLeft}>
                <Link className={style.logo} to={'/home'}>SocialApp</Link>
            </div>
            <div className={style.topbarCenter}>
                <div className={style.searchbar}>
                    <i className="fa-solid fa-magnifying-glass me-1 text-secondary"></i>
                    <input type='search' placeholder='Search for friend, post or video' className={style.searchbarInput} />
                </div>
            </div>
            <div className={style.topbarRight}>
                <div className='topbarLinks'>
                    <span className='topbarLink me-3 text-light' role='button'>Homepage</span>
                    <span className='topbarLink text-light' role='button'>Timeline</span>
                </div>
                <div className={style.topbarIcons}>
                    <div className={style.topbarIconItem}>
                        <i className="fa-solid fa-user fa-lg"></i>
                        <span className={style.topbarIconBadge}>1</span>
                    </div>

                    <div className={style.topbarIconItem}>
                        <i className="fa-solid fa-message fa-lg"></i>
                        <span className={style.topbarIconBadge}>2</span>
                    </div>

                    <div className={style.topbarIconItem}>
                        <i className="fa-solid fa-bell fa-lg"></i>
                        <span className={style.topbarIconBadge}>1</span>
                    </div>
                </div>
                <img src={img1} alt='User Image' className={style.topbarImg} role='button' onClick={() => navigate('/profile')} />
            </div>
        </div>
    </>
}
