import React from 'react'

export const Button = ({color, bgColor, size,text,borderRadius}) => {
  return (
    <button type="button"
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >Button</button>
  )
}
