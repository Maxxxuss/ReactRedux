import { connect } from 'react-redux';
import Controls from '../components/controls/controls.jsx';
import { addMetadata, deleteMetadata } from '../../redux/actions/metadaten';


const mapDispatchToProps = (dispatch , {id}) => ({
    onAddMetadata: (id) => dispatch(addMetadata(id)),
    onDeleteMetadata: (id) => dispatch(deleteMetadata(id)),

  });

// const mapDispatchToProps = (dispatch, { id }) => ({
//     onAddMetadata: (id) => () => dispatch(addMetadata(id)),
//     onDeleteMetadata: (id) => dispatch(deleteMetadata(id)),
// });

export default connect(
    null,
    mapDispatchToProps,
)(Controls);
