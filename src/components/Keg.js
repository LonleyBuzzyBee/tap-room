import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  if (props.pint <= 0) {
    return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brand: <em>{props.brand}</em></p>
        <p>Alcohol Content: <em>{props.alcoholContent}</em></p>    
        <p>Description: <em>{props.description}</em></p>
        <p>Pints available: out of stock</p>
      </div>
    </React.Fragment>
  );
    
  } else {
    return (
      <React.Fragment>
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <p>Brand: <em>{props.brand}</em></p>
          <p>Alcohol Content: <em>{props.alcoholContent}</em></p>    
          <p>Description: <em>{props.description}</em></p>
          <p>Pints available: {props.pint}</p>
        </div>
      </React.Fragment>
    );
  }
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  pint: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;