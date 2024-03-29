import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions';
import Posts from './posts/Posts';
import img1 from '../images/hd1.jpg'
import img2 from '../images/hd2.jpg'
import img3 from '../images/postImage.jpg'
import Status from './status/Status'



function Timeline() {
    const [posts,setPosts]= useState([
        {
            name:"mountain__climber_mahesh",
            postImage:img1,
            likes:12,
            timeStamp:"1d"
        },
        {
            name:"nature_lover",
            postImage:img2,
            likes:56,
            timeStamp:"12h"
        },
        {
            name:"naughty_navya",
            postImage:img3,
            likes:152,
            timeStamp:"2d"
        }
    ])
  return (
    <div className='timeline'>
        
        <div className='timeline-left'>
            <Status/>
            <div className='timeline-posts'>
               {
                posts.map((post)=>(
                    <Posts name={post.name} postImage={post.postImage} likes={post.likes} timeStamp={post.timeStamp}/>
                ))
               }
            </div>
        </div>
        <div className='timeline-right'>
            <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline;