import React from 'react'

class AdditionalCartForm extends React.Component {
  render() {
    return(
      <div>
        <div className="col-md-12 form-group">
          <input type="text" placeholder="nip" onChange={this.props.handleNipChange} className="form-control"/>
        </div>
        <div className="col-md-12" form-group>
          <input type="text" placeholder="company name" onChange={this.props.handleCompanyNameChange} className="form-control" />
        </div>
      </div>
    )
  }
}

export default AdditionalCartForm
