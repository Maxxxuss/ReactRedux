import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './control-button';
import './controls.css';


const Controls = ({ id, onAddMetadata, onDeleteMetadata }) => (
    <div className="controls">
        <ControlsButton
            text="Add"
            // onClick={onAddMetadata}
            onSubmit={onAddMetadata}

        />
        <ControlsButton
            text="Delete"
            // onClick={onDeleteMetadata}
        />
    </div>
);

Controls.propTypes = {
    id: PropTypes.string.isRequired,
    onAddMetadata: PropTypes.func.isRequired,
    onDeleteMetadata: PropTypes.func.isRequired,
};



// onSubmit = (expense) => {
//     this.props.onAddMetadata(expense);
//     this.props.history.push('/');
//   };

// const mapDispatchToProps = (dispatch) => ({
//     onAddMetadata: (expense) => dispatch(onAddMetadata(expense))
//   });

  export default Controls;
