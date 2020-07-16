import { connect } from 'react-redux';
import metadatenlist from '../metadatenList/metadatenList';
import { setActiveMetadate } from '../../redux/actions/metadaten';
import { getMetadatenForActiveTab } from '../redux/selectors/notes.js';


const mapStateToProps = (state) => ({
    metadaten: getMetadatenForActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveMetadaten: (id, isActive) => () => !isActive && dispatch(setActiveMetadate(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(metadatenlist);
