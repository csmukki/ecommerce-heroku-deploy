import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { HomepageContainer, NoteContainer } from './homepage.styles';
import {fetchSectionsStartAsync} from '../../redux/directory/directory.actions';
import {selectIsFetching} from '../../redux/directory/directory.selectors';
import Directory from '../../components/directory/directory.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const DirectoryWithSpinner = WithSpinner(Directory);


class Homepage extends React.Component {

    componentDidMount() {
        const {fetchSectionsStartAsync} = this.props;
        fetchSectionsStartAsync();
    }

    render() {
        const {isLoading} = this.props;
        return(
            <HomepageContainer>
                <DirectoryWithSpinner isLoading={isLoading} />
                <NoteContainer>
                        For Better look and feel view this in desktop mode,
                        Since for now it is not responsive...
                </NoteContainer>
            </HomepageContainer>
        
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching, 
});

const mapDispatchToProps = dispatch => ({
    fetchSectionsStartAsync: () => dispatch(fetchSectionsStartAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);