import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { HomepageContainer } from './homepage.styles';
import {firestore, sectionsForReducer} from '../../firebase/firebase.utils';
import { selectLoading } from '../../redux/directory/directory.selectors';
import {updateSections, toggleDirectorySpinner} from '../../redux/directory/directory.actions';
import Directory from '../../components/directory/directory.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const DirectoryWithSpinner = WithSpinner(Directory);

class Homepage extends React.Component {

    componentDidMount() {
        const {updateSections, toggleDirectorySpinner} = this.props;
        const collectionRef = firestore.collection('sections');
        collectionRef.onSnapshot(snapshot => {
            const convertedSections = sectionsForReducer(snapshot);
            updateSections(convertedSections);
            toggleDirectorySpinner();
        })
    }

    render() {
        return(
            <HomepageContainer>
                <DirectoryWithSpinner isLoading={this.props.loading} />
            </HomepageContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading, 
});

const mapDispatchToProps = dispatch => ({
    updateSections: sections => dispatch(updateSections(sections)), 
    toggleDirectorySpinner: () => dispatch(toggleDirectorySpinner())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);