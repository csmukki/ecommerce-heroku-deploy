import React from 'react';
import { connect } from 'react-redux';



import { selectSections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';

import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => {
    return (
        <DirectoryContainer>
            {
                sections.map(({id,  ...rest}) => (
                    <MenuItem key={id} {...rest} />
                ))
            }
        </DirectoryContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections, 
});
 
export default connect(mapStateToProps)(Directory);