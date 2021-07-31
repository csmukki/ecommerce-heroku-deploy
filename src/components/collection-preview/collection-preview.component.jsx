import React from 'react';

import { CollectionPreviewContainer, 
        TitleContainer, 
        PreviewContainer } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview= ({title, items}) => {
    return (
        <CollectionPreviewContainer>
           <TitleContainer>{title}</TitleContainer>
           <PreviewContainer>
               {
                   items.filter((item, ind) => ind < 4)
                    .map(item => (
                       <CollectionItem key={item.id} item={item} />
                   ))
               }
           </PreviewContainer>
        </CollectionPreviewContainer>
    );
}
 
export default CollectionPreview;