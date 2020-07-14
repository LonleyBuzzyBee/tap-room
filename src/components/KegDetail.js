import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, buyPintFromKeg} = props;
  console.log(keg);
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
       <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.description}</p>
      <p>{keg.pint}</p>
      <button onClick={buyPintFromKeg}></button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  buyPintFromKeg: PropTypes.func
};

export default KegDetail;