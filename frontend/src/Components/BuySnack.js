import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchSnackIDToBackend} from '../Redux/index'

class BuySnack extends Component {

  state={
    snackID: 0
  }

  handleChange = (event) => {
    this.setState({
      snackID: parseInt(event.target.value)
    })
  }

  handleBuy = () => {
    this.props.fetchSnackIDToBackend(this.state.snackID)
  }

  render() {
    let {snackID} = this.state
    return (
      <div>
        <select value={snackID} onChange={this.handleChange}>
          <option value={0} disabled>Choose a Snack to Buy!</option>
          {this.props.snacks.map(snack => <option key={snack.id} value={snack.id}>{snack.name}</option>)}
        </select>
        <button disabled={!(snackID > 0)} onClick={this.handleBuy} >Buy Snack!</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {snacks: state.snack.all}
}

export default connect(mapStateToProps, {fetchSnackIDToBackend})(BuySnack);
