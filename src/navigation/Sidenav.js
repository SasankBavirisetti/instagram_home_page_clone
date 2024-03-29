import React from 'react'
import './Sidenav.css'
import logo from '../images/textlogoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faCompass, faVideo, faMessage, faHeart, faSquarePlus, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'

function Sidenav() {
    return (
        <div className='sidenav'>
            <img src={logo} className='sidenav-logo' />
            <div className='sidenav-buttons'>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faHome} />
                    <span>Home</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faMagnifyingGlass} />
                    <span>Search</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faCompass} />
                    <span>Explore</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faVideo} />
                    <span>Reels</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faMessage} />
                    <span>Messages</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faHeart} />
                    <span>Notifications</span>
                </button>
                <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faSquarePlus} />
                    <span>Create</span>
                </button>
                {/* <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faCircleUser} />
                    <span>User</span>
                </button>
                */}

            </div>
            <div className='sidenav-more'>
            <button className='sidenav-button'>    <FontAwesomeIcon className='icons'   icon={faBars} />
                    <span>More</span>
                </button> 
            </div>
        </div>
    )
}

export default Sidenav;
{/* 
<FontAwesomeIcon icon={faCompass}/>
<FontAwesomeIcon icon={faVideo}/>
<FontAwesomeIcon icon={faMessage}/>
<FontAwesomeIcon icon={faHeart}/>
<FontAwesomeIcon icon={faSquarePlus}/>
<FontAwesomeIcon icon={faCircleUser}/>
<FontAwesomeIcon icon={faBars}/> */
}