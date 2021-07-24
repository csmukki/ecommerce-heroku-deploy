import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { ShopPageContainer } from './shop-page.styles';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionsContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';



class ShopPage extends React.Component {

    componentDidMount() {
       const {fetchCollectionsStartAsync} = this.props;
       fetchCollectionsStartAsync();
    }


    render() {
        const {match} = this.props;
        return (
            <ShopPageContainer>
                <Route exact path={`${match.url}`} component={CollectionsContainer} />
                <Route path={`${match.url}/:matchUrlParam`} component={CollectionPageContainer}/>
            </ShopPageContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});                           


export default connect(null, mapDispatchToProps)(ShopPage);