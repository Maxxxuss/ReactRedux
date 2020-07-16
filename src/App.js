import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Controls from '../src/components/controls/control'

import MetadatenPad from './components/container/metadatenPad'

const App = ({id}) => (
  
  <Fragment>
  <div className="main__controls">
    <Controls id={id} />

  </div>
  <div className="main__body">
      <MetadatenPad />
  </div>
</Fragment>

)

App.propTypes = {
  id: PropTypes.number.isRequired,
}


export default App


