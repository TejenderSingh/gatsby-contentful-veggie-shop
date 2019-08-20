import Img from "gatsby-image"
import React from "react"

const Card = ({ title, subTitle, price, img, quantity, special }) => {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <div className={`h-32 sm:h-40 overflow-hidden`}>
          <Img fluid={img} alt={subTitle} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-gray-800 text-xl capitalize leading-snug">
            {title}
          </div>
          <p className="text-gray-700 text-base capitalize mb-2">{subTitle}</p>
          <div className={`flex justify-between`}>
            <p className="text-gray-800 text-base font-bold">
              ${price}
              <span className={`font-normal text-sm text-gray-600`}>
                {"/"}
                {quantity}
              </span>
            </p>
            {special ? (
              <span class="inline-block  bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700">
                special
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
