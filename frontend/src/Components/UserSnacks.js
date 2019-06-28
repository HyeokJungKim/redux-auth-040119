import React from 'react';
import {connect} from 'react-redux'

import Snack from './Snack'
import BuySnack from './BuySnack'

const UserSnacks = (props) => (
  <div>
    <h3>Here are the snacks that you have!</h3>
    {props.snacks.map(snack => <Snack key={snack.id} snack={snack}/>)}
    <BuySnack/>
  </div>
);

const mapStateToProps = (state) => {
  return {snacks: state.user.snacks}
}

export default connect(mapStateToProps)(UserSnacks);
