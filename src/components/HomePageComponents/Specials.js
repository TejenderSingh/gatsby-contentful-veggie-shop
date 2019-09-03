import React, { Component } from "react"
import Card from "../Card"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.specials.edges,
    }
  }
  render() {
    let todaySpecials = this.state.products.filter(({ node }) => node.special)
    if (this.state.products.length > 0) {
      return (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "1.5rem",
          }}
        >
          {todaySpecials.map(({ node }) => {
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
