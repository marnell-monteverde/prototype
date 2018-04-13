import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <StripeCheckout
        name="CPD"
        description={`Php ${this.props.amount} for this seminar`}
        amount={this.props.amount * 100} /*Multiplied to 100 since Stripe API is in "Centavo" based*/
        token={token => console.log("amount: ", this.props.amount)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="PHP"
      >
        <button className="btn light-blue darken-1">
          <i class="material-icons">shop</i> Php {this.props.amount}
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);