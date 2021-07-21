import React from 'react';


import { DirectoryContainer } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const Directory = () =>  (
    <DirectoryContainer>
        {
            sections.map(({id,  ...rest}) => (
                <MenuItem key={id} {...rest} />
            ))
        }
    </DirectoryContainer>

)


export default WithSpinner(Directory);