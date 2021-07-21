import React from 'react';

import { HomepageContainer, NoteContainer } from './homepage.styles';
import Directory from '../../components/directory/directory.component';




const Homepage = () => (
    <HomepageContainer>
        <Directory />
        <NoteContainer>
                For Better look and feel view this in desktop mode,
                Since for now it is not responsive...
        </NoteContainer>
    </HomepageContainer>

);

const mapStateToProps = createStructuredSelector({
    sections: selectSections, 
    isLoading: selectIsFetching, 
});

const mapDispatchToProps = dispatch => ({
    fetchSectionsStartAsync: () => dispatch(fetchSectionsStartAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);