import { connect } from 'react-redux';
import metadatenPad from '../metadatenPad/metadatenPad';
import { addMetadata, updateMetadateContent } from '../../redux/actions/metadaten';
import { getMetadaten } from '../../redux/selectors/metadaten';


const mapStateToProps = (state) => ({
    // id: id(state), 
    content: getMetadaten (state),
});

const mapDispatchToProps = (dispatch) => ({
    onAddMetadata: (id, initalContent) => dispatch(addMetadata(id, initalContent)),
    onUpdateMetadateContent: (id, content) => dispatch(updateMetadateContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(metadatenPad);
