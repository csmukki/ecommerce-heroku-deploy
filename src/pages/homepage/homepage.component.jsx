import React from 'react';
import {connect} from 'react-redux';


import { HomepageContainer } from './homepage.styles';
import {fetchSectionsStart} from '../../redux/directory/directory.actions';
import DirectoryContainer from '../../components/directory/directory.container';



class Homepage extends React.Component {

    componentDidMount() {
        const {fetchSectionsStart} = this.props;
        fetchSectionsStart();
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
    fetchSectionsStart: () => dispatch(fetchSectionsStart())
});



export default connect(null, mapDispatchToProps)(Homepage);