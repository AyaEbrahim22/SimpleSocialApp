import React from 'react'
import style from '../Feed/Feed.module.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import {Posts} from '../../dummyData'


export default function Feed() {
  return <>
     <div className={style.feed}>
      <div className={style.feedWrapper}>
        <Share/>
     
        {Posts.map((p, index) =><Post key={index} post={p}/>)}
    
      </div>
    
</div>
  </>
 
  
}
