import React from 'react'
import './Suggestions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faUser } from '@fortawesome/free-regular-svg-icons'
import img3 from '../images/post1.jpg'



function Suggestions() {
    return (
        <div className='suggestions'>
            <div className='suggestion-my-account'>
                <div className='my-details'>
                    <img src={img3} className='my-image'/> 
                    <div className='my-info'>
                        <span className='insta-id'>sasank__the__developer</span>
                        <span className='insta-username'>Sasank Bavirisetti</span>
                    </div>
                </div>
                <button className='switch-button'>Switch</button>
            </div>
            <div className='suggestions-title'>Suggestions for you</div>
            <div className='suggestions-usernames'>

                <div className='suggestions-username'>
                    <div className='username-left'>
                        <span className='avatar'>
                            <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
                        </span>
                        <div className='username-info'>
                            <span className='username'>ramesh__the__rider</span>
                            <span className='relation'>New to Instagram</span>
                        </div>
                    </div>
                    <button className='follow-button'>Follow</button>
                </div>


                <div className='suggestions-username'>
                    <div className='username-left'>
                        <span className='avatar'>
                            <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
                        </span>
                        <div className='username-info'>
                            <span className='username'>way__to__success</span>
                            <span className='relation'>Followed by Ramesh</span>
                        </div>
                    </div>
                    <button className='follow-button'>Follow</button>
                </div>

                <div className='suggestions-username'>
                    <div className='username-left'>
                        <span className='avatar'>
                            <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
                        </span>
                        <div className='username-info'>
                            <span className='username'>lets__trade__now</span>
                            <span className='relation'>New to Instagram</span>
                        </div>
                    </div>
                    <button className='follow-button'>Follow</button>
                </div>

                <div className='suggestions-username'>
                    <div className='username-left'>
                        <span className='avatar'>
                            <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
                        </span>
                        <div className='username-info'>
                            <span className='username'>wild__life__photography</span>
                            <span className='relation'>Follwed by Nikhil</span>
                        </div>
                    </div>
                    <button className='follow-button'>Follow</button>
                </div>

            </div>
        </div>
    )
}

export default Suggestions