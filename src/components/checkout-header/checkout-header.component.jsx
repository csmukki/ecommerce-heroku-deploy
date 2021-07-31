import React from 'react';

import {
    CheckoutHeaderContainer, 
    HeaderBlock
} from './checkout-header.styles';

const CheckoutHeader = () => (
    <CheckoutHeaderContainer>
        <HeaderBlock>
            <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>&#10008;</span>
        </HeaderBlock>
    </CheckoutHeaderContainer>
);

export default CheckoutHeader;