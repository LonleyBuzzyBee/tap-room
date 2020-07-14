import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, buyPintFromKeg } = props;
  if (keg.pint <= 0) {
    
    return (
      <React.Fragment>
        <h1>Keg Details:</h1>
        <h3>{keg.name}</h3>
        <p>{keg.brand}</p>
        <p>{keg.alcoholContent}</p>
        <p>{keg.description}</p>
        <p>out of stock</p>
        <button onClick={() => buyPintFromKeg(keg.id)}>buy a pint</button>
        <hr/>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Keg Details:</h1>
        <h3>{keg.name}</h3>
        <p>{keg.brand}</p>
        <p>{keg.alcoholContent}</p>
        <p>{keg.description}</p>
        <p>{keg.pint}</p>
        <button onClick={() => buyPintFromKeg(keg.id)}>buy a pint</button>
        <hr/>
      </React.Fragment>
    );
    
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  buyPintFromKeg: PropTypes.func
};

export default KegDetail;