import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsFetching } from '../../redux/directory/directory.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Directory from './directory.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});


const DirectoryContainer = compose(
    connect(mapStateToProps), 
    WithSpinner
)(Directory);


export default DirectoryContainer;