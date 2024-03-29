import React from 'react'
import './Posts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
// import imagepost from "../../images/hd2.jpg"

function Posts({name,postImage,likes,timeStamp}) {
    return (
        <div className='post'>
            <div className='post-header'>
                <div className='post-headerAuthor'>
                    <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
                    {name}.<span>{timeStamp}</span>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />

            </div>
            <div className='post-image'>
                <img src={postImage} />
            </div>
            <div className='post-footer'>
                <div className='footer-icons'>
                    <div className='post-iconsMain'>
                        <FontAwesomeIcon className='postIcon' icon={faHeart} />
                        <FontAwesomeIcon className='postIcon' icon={faComment} />
                        <FontAwesomeIcon className='postIcon' icon={faPaperPlane} />
                    </div>
                    <div className='post-iconSave'>
                        <FontAwesomeIcon className='postIcon' icon={faBookmark} />
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    )
}

export default Posts;