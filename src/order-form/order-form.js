import React from 'react'

export default class extends React.Component {

  state = {
    email: '',
    phone: '',
    name: '',
  }

  componentDidMount() {
    if (this.props.formData) this.setState(this.props.formData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.showModal(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input type="tel" className="form-control" id="exampleInputPhone"
            onChange={(e) => this.setState({ phone: e.target.value })}
            value={this.state.phone} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" className="form-control" id="exampleInputName"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

}
