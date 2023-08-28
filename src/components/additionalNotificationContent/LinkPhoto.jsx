import React from 'react'

function LinkPhoto(props) {
  return (
    <a className='link-photo' href={props.link}>
        <img src={`./images/${props.photoName}`} alt={props.photoName} className='link-photo-content' />
    </a>
  )
}

export default LinkPhoto