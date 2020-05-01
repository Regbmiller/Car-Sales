import React from 'react';
import { connect } from 'react-redux';

import Header from './compo nents/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
   }
}
export default connect(mapStateToProps,{})(App);