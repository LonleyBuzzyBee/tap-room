import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";




//name, brand, price and alcoholContent
function KegList(props){
  let masterKegList = props.masterKegList;
  return (
    <React.Fragment>
      {masterKegList.map((keg, index) =>
         <Keg name={keg.name}
          brand={keg.brand}
          description={keg.description}
          alcoholContent={keg.alcoholContent}
          key={index}
          />
      )}
  </React.Fragment>
  );
}
 KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;