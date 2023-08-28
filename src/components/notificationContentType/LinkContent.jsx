import React from 'react'

function LinkContent(props) {
  return (
    <>
        {props.text} <a href={props.link}>{props.linkText}</a>
    </>
  )
}

export default LinkContent