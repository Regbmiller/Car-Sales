import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => {props.removeFeature(props.feature)}}>
      X
      </button>
      {props.features.name}
    </li>
  );
};

export default AddedFeature;