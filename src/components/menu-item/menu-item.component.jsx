import React from 'react';

import { MenuItemContainer, 
    BackgroundImageContainer, 
    ContentContainer, 
    TitleContainer, 
    SubtitleContainer } from './menu-item.styles';

import {withRouter} from 'react-router-dom';

const MenuItem = ({imageUrl, title, linkUrl, history, match}) => (
    <MenuItemContainer
        onClick={ () => history.push(`shop${match.url}${linkUrl}`) }
    >
        <BackgroundImageContainer imageUrl={imageUrl} />
        <ContentContainer>
            <TitleContainer>{title}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);


export default withRouter(MenuItem);