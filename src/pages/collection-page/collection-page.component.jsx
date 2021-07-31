import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {selectCollectionMapToUrl} from '../../redux/shop/shop.selectors';


import { CollectionContainer,
        ItemsContainer, 
        TitleContainer, 
        CollectionItemContainer } from './collection-page.sytles';


const CollectionPage = ({collection}) => {
    useEffect(() => {
        console.log("COLLECTION:", collection);
    });
    const {title, items} = collection;
    return (
    <CollectionContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>
            {
                items.map(item => (
                    <CollectionItemContainer key={item.id} item={item} />
                ))
            }
        </ItemsContainer>
    </CollectionContainer>
    );
};


const mapStateToProps = (state, otherProps) => ({
    collection: selectCollectionMapToUrl(otherProps.match.params.matchUrlParam)(state)
});


export default connect(mapStateToProps)(CollectionPage);