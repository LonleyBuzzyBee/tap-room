import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Brand: <em>{props.brand}</em></p>
      <p>Alcohol Content: <em>{props.alcoholContent}</em></p>    
      <p>Description: <em>{props.description}</em></p>    
      <hr/>
    </React.Fragment>
  );
}

//<button onClick={this.ToggleForm}>Back to List</button>

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  description: PropTypes.string
};

export default Keg;