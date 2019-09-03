import React, { Component } from "react"
import Card from "../Card"

const getCategories = items => {
  let allCategories = items.map(item => {
    return item.node.productCategory
  })
  let uniqueCategories = new Set(allCategories)
  let categories = Array.from(uniqueCategories)
  categories = ["all", ...categories]
  return categories
}
class Products extends Component {
  productAll = React.createRef()
  state = {
    products: this.props.items.edges,
    vegetables: this.props.items.edges,
    categories: getCategories(this.props.items.edges),
  }
  makeButtonActive = () => {
    const changeBg = this.productAll.current.childNodes[0].classList.replace(
      "bg-indigo-500",
      "bg-indigo-700"
    )
    return changeBg
  }
  componentDidMount() {
    this.makeButtonActive()
  }
  handleItems = (category, event) => {
    event.persist()
    // console.log("before changes--", event.target.classList.value)
    event.target.parentElement.childNodes.forEach(item => {
      return (
        item.classList.add("bg-indigo-500"),
        item.classList.remove("bg-indigo-700")
      )
    })
    event.target.classList.replace("bg-indigo-500", "bg-indigo-700")
    let tempProducts = [...this.state.products]
    if (category === "all") {
      this.setState(() => {
        return {
          vegetables: tempProducts,
        }
      })
    } else {
      let products = tempProducts.filter(
        ({ node }) => node.productCategory === category
      )
      this.setState(() => {
        return { vegetables: products }
      })
    }
    // console.log("after changes--", event.target.classList.value)
  }
  render() {
    if (this.state.products.length > 0) {
      return (
        <>
          <div
            className={`flex flex-wrap justify-center text-gray-800 mb-4 md:mb-6`}
            ref={this.productAll}
          >
            {this.state.categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white text-sm lg:text-base font-semibold py-2 px-4 mx-2 mb-2 md:mb-0 rounded capitalize focus:outline-none"
                  style={{ transition: ".1s ease-in-out" }}
                  onClick={e => {
                    this.handleItems(category, e)
                  }}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gridGap: "1.5rem",
            }}
          >
            {this.state.vegetables.map(({ node }) => {
              return (
                <div key={node.id}>
                  <Card
                    title={node.productName}
                    subTitle={node.productDescription.productDescription}
                    price={node.productPrice}
                    img={node.productImage.fluid}
                    quantity={node.quantity}
                    special={node.special}
                  ></Card>
                </div>
              )
            })}
          </section>
        </>
      )
    } else {
      return (
        <section>
          <div
            className={`text-2xl font-semibold text-gray-800 text-center my-8`}
          >
            Nothing to display.
          </div>
        </section>
      )
    }
  }
}

export default Products
