import React from "react"
const ImageTitle = ({ title }) => {
  return (
    <div className={`bg-gray-900`} style={{ opacity: "0.9" }}>
      <h1
        className={`text-2xl capitalize py-4 px-10 text-gray-100 font-semibold shadow-xl tracking-wider`}
      >
        {title}
      </h1>
    </div>
  )
}

export default ImageTitle
