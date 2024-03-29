import React from 'react'
import './Status.css'
import img1 from '../../images/hd1.jpg'
import img2 from '../../images/hd2.jpg'
import img4 from '../../images/post2.jpg'
import img5 from '../../images/post3.jpg'
import img6 from '../../images/post4.jpg'
import img7 from '../../images/postImage.jpg'


function Status() {
    const images = [
        { image: img1,name:"__natu..." },
        { image: img2,name:"its__ram..." },
        { image: img4,name:"mad__mahi__..." },
        { image: img5 ,name:"__sudha..."},
        { image: img6,name:"akhi__..." },
        { image: img7,name:"sweth__...." },
    ]
    return (
        <div className='status'>
            {/* <div className='image-container'></div> */}
            {images.map((imgg) => (
                <div className='image-container'>
                    <img className='status-image' src={imgg.image}></img>
                    <span className='photo-details'>{imgg.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Status