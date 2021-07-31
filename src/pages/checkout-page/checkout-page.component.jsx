import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CheckoutPageContainer, 
    CheckoutItemsContainer, 
    TotalAmountContainer, 
    TestWarningContainer, 
    CheckoutButtonContainer
} from "./checkout-page.styles";

import { selectCartItems, totalCartItemsAmount } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeader />
        <CheckoutItemsContainer>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }
        </CheckoutItemsContainer>
        <TotalAmountContainer>
            <strong>Total</strong> ${total}
        </TotalAmountContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </TestWarningContainer>
        <CheckoutButtonContainer />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    total: totalCartItemsAmount
});


export default connect(mapStateToProps)(CheckoutPage);