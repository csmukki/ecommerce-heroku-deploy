import React from 'react';
import { connect } from 'react-redux';


import { firestore, collectionsForReducer } from '../../firebase/firebase.utils';
import { toggleShopSpinner, updateCollections } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './shop-page.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectLoading } from '../../redux/shop/shop.selectors';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);



class ShopPage extends React.Component {

    componentDidMount() {
        const {updateCollections, toggleShopSpinner} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const convertedCollections = collectionsForReducer(snapshot);
            updateCollections(convertedCollections)
            toggleShopSpinner();
        });

    }

    render() {
        const {loading} = this.props;
        return (
            <ShopPageContainer>
                <CollectionOverviewWithSpinner isLoading={loading} />
            </ShopPageContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections)), 
    toggleShopSpinner: () => dispatch(toggleShopSpinner())
});

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);