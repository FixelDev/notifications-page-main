import React from 'react'

function MessageBox(props) {
  return (
    <a href={props.link} className="message-box">
        <p className="message-box-content">
            {props.text}
        </p>
    </a>
  )
}

export default MessageBox