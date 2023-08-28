import React, {useState} from 'react'
import data from './../data.json'
import Notification from './Notification'
import BaseContent from './notificationContentType/BaseContent'
import LinkContent from './notificationContentType/LinkContent'
import MessageBox from './additionalNotificationContent/MessageBox'
import LinkPhoto from './additionalNotificationContent/LinkPhoto'

function NotificationPanel() {

    const[notificationsData, setNotificationsData] = useState(data);
    const unreadNotificationsCount = countUnreadNotifications();

    const notificationElements = notificationsData.map(notification =>{
        return generateNotification(notification);
    });

    function countUnreadNotifications(){
        return notificationsData.filter(notification => notification.isUnread).length;
    }

    function generateNotification(data){
        const notification = <Notification
            key={data.id}
            user={data.user}
            avatar={data.avatar}
            age={data.age}
            isUnread={data.isUnread}
            content={getNotificationContent(data)}
            additionalContent={getNotificationAdditionalContent(data)}
        />

        return notification;
    }

    console.log(notificationElements);

    function getNotificationContent(data){
        let content = '';

        if(data.content.type === 'base'){
            content = <BaseContent 
                text={data.content.text}
            />
        }
        else if(data.content.type === 'link'){
            content = <LinkContent 
                text={data.content.text}
                link={data.content.link}
                linkText={data.content.linkText}
            />
        }

        return content;
    }

    function getNotificationAdditionalContent(data){
        if(!data.additionalContent)
            return null;

        let additionalContent = '';

        if(data.additionalContent.type === 'messageBox'){
            additionalContent = <MessageBox
                text={data.additionalContent.text}
                link={data.additionalContent.link}
            />
        }
        else if(data.additionalContent.type === 'linkPhoto'){
            additionalContent = <LinkPhoto
                photoName={data.additionalContent.photoName}
                link={data.additionalContent.link}
            />
        }

        return additionalContent;
    }

    function readAllNotifications(){
        setNotificationsData(prevNotificationsData =>{
            return prevNotificationsData.map(notification =>{
                return {
                    ...notification,
                    isUnread:false
                }
            })
        })
    }

    return (
        <section className="notification-panel">
            <div className="notification-panel-header flex">
                <div className="notification-panel-title flex">
                    <h1>Notifications</h1>
                    <div className="notifications-counter flex content-center">{unreadNotificationsCount}</div>
                </div>

                <button className="mark-all-read-btn" onClick={readAllNotifications}>Mark all as read</button>
            </div>

            <div className="notifications-container">
                {notificationElements}
            </div>
        </section>
    )
}

export default NotificationPanel