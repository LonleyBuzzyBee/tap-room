import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";


function KegList(props){

  return (
    <React.Fragment>
  
      {props.masterKegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          description={keg.description}
          alcoholContent={keg.alcoholContent}
          pint={keg.pint}
          id={keg.id}
          key={keg.id}
          />
      )}
  </React.Fragment>
  );
}
 KegList.propTypes = {
   kegList: PropTypes.array,
   onKegSelection: PropTypes.func

};

export default KegList;