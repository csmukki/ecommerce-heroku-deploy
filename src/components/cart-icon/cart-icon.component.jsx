import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {CartIconContainer, 
    CartCountContainer, 
    ShoppingIconContainer} from './cart-icon.styles';
    
import { totalCartItemsCount } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({total, toggleCartHidden}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <CartCountContainer>{total}</CartCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    total: totalCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);