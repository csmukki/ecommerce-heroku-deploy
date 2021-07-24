import React from 'react';
import {connect} from 'react-redux';


import { HomepageContainer } from './homepage.styles';
import {fetchSectionsStartAsync} from '../../redux/directory/directory.actions';
import DirectoryContainer from '../../components/directory/directory.container';



class Homepage extends React.Component {

    componentDidMount() {
        const {fetchSectionsStartAsync} = this.props;
        fetchSectionsStartAsync();
    }

    render() {
        return(
            <HomepageContainer>
               <DirectoryContainer />
            </HomepageContainer>
        
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchSectionsStartAsync: () => dispatch(fetchSectionsStartAsync())
});



export default connect(null, mapDispatchToProps)(Homepage);