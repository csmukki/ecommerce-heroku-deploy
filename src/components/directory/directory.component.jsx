import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectSections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) =>  (
    <DirectoryContainer>
        {
            sections.map(({id,  ...rest}) => (
                <MenuItem key={id} {...rest} />
            ))
        }
    </DirectoryContainer>

)

const mapStateToProps = createStructuredSelector({
    sections: selectSections
});


export default connect(mapStateToProps)(Directory);