import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { totalCartItemsAmount } from '../../redux/cart/cart.selectors';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({total}) => {

    const onToken = () => {
        alert("Payment Successfull");
    };

    const stripePrice = total * 100;

    return (
        <StripeCheckout
            name="buy-clothes.in"
            panelLabel="Pay Now"
            amount={stripePrice}
            currency="USD"
            token={onToken}
            stripeKey="fake3333stripe333key"
            description={`Your total is ${total}`}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lW0-0bjXm__80_vZ8QxsASP1PeqRzyJUbA&usqp=CAU"
            shippingAddress
            billingAddress
            allowRememberMe
            alipay
            bitcoin
        />
    );
};

const mapStateToProps = createStructuredSelector({
    total: totalCartItemsAmount
});

export default connect(mapStateToProps)(StripeCheckoutButton);