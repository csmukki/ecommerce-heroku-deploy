import React from 'react';

import {CartIconContainer, 
        CartCountContainer, 
        ShoppingIconContainer} from './cart-icon.styles';


const CartIcon = () => (
    <CartIconContainer>
        <ShoppingIconContainer />
        <CartCountContainer>1</CartCountContainer>
    </CartIconContainer>
);

export default CartIcon;