import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
    onToken = (token, addresses) => {
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
        window.location.href="/cookbooks/"
    };

    render() {
        return (
            <StripeCheckout
                //amount="500"
                //billingAddress
                locale="auto"
                name="Е-книга со рецепти"
                stripeKey="pk_test_dvBjNMhOgg9Bo5uQ0CdX6RT500EMtE4SOa"
                token={this.onToken}
                label="Плати со картичка"
                panelLabel="Купи"
            />
        )
    }
}



