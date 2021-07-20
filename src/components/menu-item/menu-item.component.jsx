import React from 'react';

import { MenuItemContainer, 
    BackgroundImageContainer, 
    ContentContainer, 
    TitleContainer, 
    SubtitleContainer } from './menu-item.styles';

const MenuItem = ({imageUrl, title}) => (
    <MenuItemContainer>
        <BackgroundImageContainer imageUrl={imageUrl} />
        <ContentContainer>
            <TitleContainer>{title}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);


export default MenuItem;