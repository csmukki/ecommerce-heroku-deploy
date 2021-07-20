import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSections, selectIsFetching } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';
import {fetchSectionsStartAsync} from '../../redux/directory/directory.actions';
import MenuItem from '../menu-item/menu-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

class Directory extends React.Component {

    componentDidMount() {
        const {fetchSectionsStartAsync} = this.props;
        fetchSectionsStartAsync();
    }

    render() {
        const {sections} = this.props;
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
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections, 
    isLoading: selectIsFetching, 
});

const mapDispatchToProps = dispatch => ({
    fetchSectionsStartAsync: () => dispatch(fetchSectionsStartAsync())
});


export default WithSpinner(connect(mapStateToProps, mapDispatchToProps)(Directory));