import React from 'react'

export default function Container(props) {
  return (
    <div className={`max-w-[1200px] mx-auto my-4 ${props.extraClass}`}>
      {props.children}
    </div>
  )
}
