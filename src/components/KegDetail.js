import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, buyPintFromKeg } = props;
  if (keg.pint <= 0) {
    
    return (
     <div className="details"> 
        <div className="details-child">
          <div className="details-container">
            <React.Fragment>
              <h1>Keg Details:</h1>
              <h3>{keg.name}</h3>
              <p>{keg.brand}</p>
              <p>{keg.alcoholContent}</p>
              <p>{keg.description}</p>
              <p>out of stock</p>
              <button onClick={() => buyPintFromKeg(keg.id)}>buy a pint</button>
            </React.Fragment>
          </div>
        </div>
      </div> 
    );
  } else {
    return (
      <div className="details"> 
        <div className="details-child">
          <div className="details-container">
            <React.Fragment>
              <h1>Keg Details:</h1>
              <h3>{keg.name}</h3>
              <p>{keg.brand}</p>
              <p>{keg.alcoholContent}</p>
              <p>{keg.description}</p>
              <p>{keg.pint}</p>
              <button onClick={() => buyPintFromKeg(keg.id)}>buy a pint</button>
            </React.Fragment>
            </div>
          </div>
        </div> 
    );
    
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  buyPintFromKeg: PropTypes.func
};

export default KegDetail;