import React from 'react';
import { removeFeature } from './actions/actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => {props.removeFeature(props.feature)}} className="button">
        X
      </button>
      {props.features.name}
    </li>
  );
};

export default connect(()=>{},{removeFeature})(AddedFeature);





