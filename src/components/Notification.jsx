import React from 'react'
import colors from './../scss/_config.module.scss';

function Notification(props) {

    const unreadStyle = {
        backgroundColor: colors.veryLightGrayishBlue,
    }

    return (
        <div className='notification flex' style={props.isUnread ? unreadStyle : {}}>
            <img src={`./images/${props.avatar}`} alt={`${props.user} avatar`} className="notification-user-avatar" />
            <div className="notification-content">
                <div className="notification-base-content">
                    <p className='lead'>
                        <a href="#" className='notification-user'>{props.user}</a>
                        {props.content}    
                        {props.isUnread && <span className="unread-mark"></span>}
                    </p>
                    <p className="notification-age">{`${props.age} ago`}</p>
                </div>
                {props.additionalContent && props.additionalContent}
            </div>

        </div>
    )
}

export default Notification