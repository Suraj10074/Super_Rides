import React from 'react'
import { Link } from 'react-router-dom'
class SelectLocationCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: '0',
      value2: '0'
    };
  }
  onChangeSource(e) {
    this.setState({
      value1: e.target.value
    })
    console.log(this.state.value1);
  }
  onChangeDestination(e) {
    this.setState({
      value2: e.target.value
    })
    console.log(this.state.value2);
  }
  render() {
    return (
      <div style={{ marginLeft: "700px" }}>
        <form>
          <div className="form-group" >
            <label>Date</label>
            <input className="form-control" type="date" style={{ width: "400px" }}></input>
            <label htmlFor="select1" >Source Location</label>
            <select value={this.state.value1} onChange={this.onChangeSource.bind(this)} className="form-control" style={{ width: "400px" }} >
              <option value="0" disabled selected>Choose your location</option>
              <option value="1">Kormangla</option>
              <option value="2">BTM Layout</option>
              <option value="3">HSR Layout</option>
              <option value="4">MG Road</option>
              <option value="5">HAL</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="select1" >Destination Location</label>
            <select value={this.state.value2} onChange={this.onChangeDestination.bind(this)} className="form-control" style={{ width: "400px" }}>
              <option value="0" disabled selected>Choose your location</option>
              <option value="1">Kormangla</option>
              <option value="2">BTM Layout</option>
              <option value="3">HSR Layout</option>
              <option value="4">MG Road</option>
              <option value="5">HAL</option>
            </select>
          </div>
          <Link to="/bookCarConfirmation"> <button className="btn btn-warning" style={{ marginTop: "20px", width: "400px" }}>Book</button></Link>
        </form>
      </div>
    )
  }
}
export default SelectLocationCar;