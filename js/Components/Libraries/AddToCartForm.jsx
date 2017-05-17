import React from 'react'

class AddToCartForm extends React.Component {
    render() {
        return (
          <div>
            <input type="number" min="1" max={this.props.quantity}
            onChange={this.props.qntHandleChange}/> z {this.props.quantity}<br/>
            <button type="button" className="btn btn-warning btn-lg"
            onClick={this.props.btnHandleClick}>
                Dodaj do koszyka
            </button>
          </div>
        )
    }
}

export default AddToCartForm
