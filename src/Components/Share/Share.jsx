import React from 'react'
import style from './Share.module.css'
import profileImg from '../../assets/person/1.jpeg' 


export default function Share() {
  return (
    <div className={style.share}>
        <div className='shareWrapper'>
            <div className={style.shareTop}>
                <img  src={profileImg}  className={style.shareProfileImg} alt='user img'/>
                <input className={style.shareInput} placeholder="What's on your mind?"/>
            </div>

            <hr className={style.shareHr}/>

                <div className={style.shareBottom}>
                    <div className={style.shareOptions}>

                    <div className={style.shareOption}>
                        <i className={`${style.imgIcon} fa-solid fa-images`}></i>
                        <span className={style.shareOptionText}>Photo or Video</span>
                    </div>

                    <div className={style.shareOption}>
                        <i  className={`${style.tagIcon} fa-solid fa-tag`}></i>
                        <span className={style.shareOptionText}>Tag</span>
                    </div>

                    <div className={style.shareOption}>
                        <i className={`${style.locIcon} fa-solid fa-location-dot`}></i>
                        <span className={style.shareOptionText}>Location</span>
                    </div>
                    
                    <div className={style.shareOption}>
                        <i className={`${style.faceIcon} fa-solid fa-face-laugh `}></i>
                        <span className={style.shareOptionText}>Feelings</span>
                    </div>

                    </div>
                    <button className={style.shareBtn}>Share</button>
                </div>
                

          
        </div>
    </div>
  )
}
