import React from 'react'

function RoundImage({src, ...props}) {
  return (
    <img {...props} src={src} style={{
      borderRadius: "1em",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }} className='rounded-image'/>
  )
}

export default RoundImage