import React from "react"

const SectionWrapper = ({ children, bg }) => {
  return <div className={`py-12 px-6 ${bg}`}>{children}</div>
}

export default SectionWrapper
