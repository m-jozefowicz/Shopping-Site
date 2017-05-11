import React from 'react'

class CartTableRows extends React.Component {
  render() {
    return (
      <tr>
        <td >
          <img className="mini-photo" src={this.props.photo} alt='foto' />
        </td>
        <td>
          <span className='name'>
             {this.props.name}
          </span>
          <span className='price'>
             ({this.props.price} zł)
          </span>
          <span className="quantity"><br/>
            Ilość: {this.props.quantity}
          </span>
          <span className="productSum">
            Suma: {this.props.productSum} zł
          </span>
          <button onClick={this.props.deleteButton} data-id={this.props.id} className="btn btn-info show-product-button">
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default CartTableRows
