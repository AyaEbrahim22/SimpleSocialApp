import React, { useState } from 'react'
import style from './Post.module.css'
import likeIcon from '../../assets/like.png'
import heartIcon from '../../assets/heart.png'
import {Users} from '../../dummyData'

export default function Post({post}) {

    let [like, setLike] = useState(post.like)
    let [isLiked, setIsLiked] = useState(false)

    function likeHandler(){
        setLike(isLiked? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
    <div className={style.post}>
        <div className={style.postWrapper}>
            
            <div className={style.postTop}>
                <div className="postTopLeft">
                    <img className={style.postProfileImg} src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt='profile img'/>
                    <span className={style.postUserName}> {Users.filter((user) => user.id === post.userId)[0].username}</span>
                    <span className={style.postDate}>{post.date}</span>
                </div>

                <div className="postTopRight">
                  <i className="fa-solid fa-ellipsis-vertical" role='button'></i>
                </div>
            </div>


            <div className="postCenter">
                <span className={style.postText}>{post?.desc}</span>
                <img className={style.postImg} src={post.photo} alt='post Img'/>
            </div>

            <div className={style.postBottom}>
                <div className="postBottomLeft">
                    <img className={style.likeIcon} src={likeIcon} alt='like Icon' onClick={() => likeHandler()} role='button' />
                    <img className={style.likeIcon} src={heartIcon} alt='Heart Icon' onClick={() => likeHandler()} role='button' />
                    <span className={style.postLikeCounter} role='button'>{like}{isLiked?' people and You like it': ' people like it'}</span>
                </div>
                <div className="postBottomRight">
                    <span className={style.postCommentText} role='button'>{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
