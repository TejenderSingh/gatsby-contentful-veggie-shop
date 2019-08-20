import React from "react"

const Title = ({ title }) => {
  return (
    <h1
      className={`font-bold text-4xl leading-none text-center mb-6 text-gray-800`}
    >
      {title}
    </h1>
  )
}

export { Title }
