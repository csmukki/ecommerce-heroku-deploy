import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import {
    CartDropdownContainer, 
    CartItemsContainer, 
    EmptyMessageContainer, 
    CustomButtonContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';



const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?(
                    cartItems.map(({id, ...otherProps}) => (
                        <CartItem key={id} {...otherProps} />
                    ))
                ) : (
                    <EmptyMessageContainer>Cart is Empty</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CustomButtonContainer
            onClick={() => {
                history.push('/checkout')
                toggleCartHidden()
            }}
        >GO TO CHECKOUT</CustomButtonContainer>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));