import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";




//name, brand, price and alcoholContent
function KegList(props){
  let masterKegList = props.masterKegList;
  return (
    <React.Fragment>
      {masterKegList.map((keg) =>
         <Keg name={keg.name}
          brand={keg.brand}
          description={keg.description}
          alcoholContent={keg.alcoholContent}
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