import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';


// const onSubmit = (expense) => {
//     this.props.onAddMetadata(expense);
//   };

const ControlsButton = ({ alignRight, text, onClick, onSubmit }) => (
    
    <button
        className={classnames('controls__button', {
            'controls__button--right': alignRight
        })}
        onSubmit={onSubmit}
        // onClick={onClick}
        aria-label={text}
    >
        {text}
    </button>
);

ControlsButton.propTypes = {
    alignRight: PropTypes.bool,
    text: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

ControlsButton.defaultProps = {
    alignRight: false,
};

export default ControlsButton;
