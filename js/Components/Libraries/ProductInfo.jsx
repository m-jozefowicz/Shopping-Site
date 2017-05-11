import React from 'react'
import AddToCartForm from './AddToCartForm.jsx'

class ProductInfo extends React.Component {
  render() {
    return (
      <div className="product-info">
        <p className="title">
          <h2>{this.props.name}</h2>
          <span>{this.props.price} zł</span>
        </p>
        <hr/>
        <p className="description">
          {this.props.description}
        </p>
        <hr/>
        <p className="add-to-cart">
          {
            this.props.available ? <AddToCartForm
                qntHandleChange={this.props.qntHandleChange}
                btnHandleClick={this.props.btnHandleClick}
                quantity={this.props.quantity} /> : <span className="unavailable">Produkt niedostępny</span>
          }
        </p>
      </div>
    )
  }
}

export default ProductInfo
