import React from 'react';
import { connect } from 'react-redux';

import {CollectionItemContainer, 
    ImageContainer, 
    DetailsContainer, 
    NameContainer, 
    PriceContainer,
    CustomButtonContainer } from './collection-item.styles';
import { addItemToCart } from '../../redux/cart/cart.actions';


const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl}/>
            <DetailsContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </DetailsContainer>
            <CustomButtonContainer
                onClick={() => addItemToCart(item)}
            >ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    );
}
 
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);