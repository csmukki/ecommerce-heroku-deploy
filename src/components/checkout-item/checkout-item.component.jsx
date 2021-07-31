import React from 'react';
import { connect } from 'react-redux';


import {
    CheckoutItemContainer, 
    ImageContainer, 
    NameContainer, 
    QuantityContainer, 
    PriceContainer, 
    RemoveButtonContainer
} from './checkout-item.styles';

import {clearItemFromCart} from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, clearItemFromCart}) => {
    const {imageUrl, name, price, quantity} = item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="produce" />
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>{quantity}</QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButtonContainer
                onClick={() => clearItemFromCart(item)}
            >&#10008;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);