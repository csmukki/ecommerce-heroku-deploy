import styled from 'styled-components';

import CollectionItem from '../../components/collection-item/collection-item.component';


export const TitleContainer = styled.span``;
export const CollectionItemContainer = styled(CollectionItem)``;
export const ItemsContainer = styled.div``;


export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;

    & ${TitleContainer} {
        font-size: 38px;
        margin: 0 auto 30px;
    }

    & ${ItemsContainer} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    
        & ${CollectionItemContainer} {
            width: 30vw;
            margin-bottom: 10px;
        }
    }
`;
