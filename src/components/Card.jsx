import Img from "gatsby-image"
import React from "react"

const Card = ({ title, subTitle, price, img, quantity }) => {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg bg-gray-100">
        <div className={`h-32 sm:h-40 overflow-hidden`}>
          <Img fluid={img} alt={subTitle} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-gray-800 text-xl mb-1 capitalize leading-snug">
            {title}
          </div>
          <p className="text-gray-700 text-base capitalize">{subTitle}</p>
          <p className="text-gray-800 text-base font-bold">
            ${price}
            <span className={`font-normal text-sm text-gray-600`}>
              {" "}
              {quantity}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
