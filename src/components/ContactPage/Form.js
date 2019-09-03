import React from "react"
import useForm from "./useForm"
import validate from "./Validation"

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    success,
    validate
  )

  function success() {
    console.log("No errors, submit callback called!")
  }

  return (
    <div className={`container mx-auto flex justify-center`}>
      <form onSubmit={handleSubmit} noValidate className={`w-full max-w-4xl`}>
        <div className={`flex flex-wrap -mx-3 mb-6`}>
          <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500 ${errors.name &&
                "border-red-500"}`}
              name="name"
              id="name"
              type="text"
              onChange={handleChange}
              value={values.name || ""}
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p className={`text-red-500 text-xs italic`}>{errors.name}</p>
            )}
          </div>
          <div className={`w-full md:w-1/2 px-3`}>
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
              htmlFor="email"
            >
              email
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500 ${errors.email &&
                "border-red-500"}`}
              name="email"
              id="email"
              type="email"
              onChange={handleChange}
              value={values.email || ""}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className={`text-red-500 text-xs italic`}>{errors.email}</p>
            )}
          </div>
        </div>
        <div className={`w-full mb-8`}>
          <label
            className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="description"
          >
            Description
          </label>
          <div className="rounded">
            <textarea
              className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500 ${errors.name &&
                "border-red-500"}`}
              name="description"
              id="description"
              onChange={handleChange}
              value={values.description || ""}
              rows="7"
              placeholder="Your description here..."
            />
            {errors.description && (
              <p className={`text-red-500 text-xs italic`}>
                {errors.description}
              </p>
            )}
          </div>
        </div>
        <div className={`flex justify-center`}>
          <button
            type="submit"
            className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
