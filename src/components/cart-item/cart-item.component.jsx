import React from 'react';

import {
    CartItemContainer, 
    ItemDetailsContainer, 
    NameContainer, 
    ImageContainer
} from './cart-item.styles';


const CartItem = ({imageUrl, name, price, quantity}) => (
    <CartItemContainer>
        <ImageContainer
            src={imageUrl}
        />
        <ItemDetailsContainer>
            <NameContainer>{`${name} :`} ${price * quantity}</NameContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;