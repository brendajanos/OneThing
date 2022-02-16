import React from "react"

const CircleButton = (props) => {
  const { title, className = "", onClick } = props

  return (
    <button className={`${className} circle-btn`} onClick={onClick}>
      {title}
    </button>
  )
}

export default CircleButton
