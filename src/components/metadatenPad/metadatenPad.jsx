import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './metadatenPad.css';


class metadatenPad extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        onAddMetadata: PropTypes.func.isRequired,
        onUpdateMetadateContent: PropTypes.func.isRequired,
    };

    get activeMetadateExists() {
        return !!this.props.id;
    }

    handleChange = (e) => {
        const { id, onAddMetadata, onUpdateMetadateContent } = this.props;
        const content = e.target.value;
        if (!this.activeMetadateExists) {
            return onAddMetadata(id, content);
        }
        return onUpdateMetadateContent(id, content);
    }

    render() {
        const { content } = this.props;
        return (
            <div className="metadatePad">
                <h1>Hello Worlds</h1>
              
                
                <textarea
                    className="metadatePad__content"
                    onChange={this.handleChange}
                    value={content}
                />
            </div>
        );
    }
};

export default metadatenPad;
