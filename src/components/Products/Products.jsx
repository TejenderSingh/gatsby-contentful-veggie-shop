import React, { Component } from "react"
import Card from "../Card"

class Products extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {
      products: props.items.edges,
      vegetable: props.items.edges,
    }
  }

  render() {
    if (this.state.products.length > 0) {
      return (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "1.5rem",
          }}
        >
          {this.state.vegetable.map(({ node }) => {
            return (
              <div key={node.id}>
                <Card
                  title={node.productName}
                  subTitle={node.productDescription.productDescription}
                  price={node.productPrice}
                  img={node.productImage.fluid}
                  quantity={node.quantity}
                ></Card>
              </div>
            )
          })}
        </section>
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
