import React from 'react';

import {CollectionItemContainer, 
        ImageContainer, 
        DetailsContainer, 
        NameContainer, 
        PriceContainer,
        CustomButtonContainer } from './collection-item.styles';


const CollectionItem = ({name, price, imageUrl}) => {
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl}/>
            <DetailsContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </DetailsContainer>
            <CustomButtonContainer>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    );
}
 
export default CollectionItem;