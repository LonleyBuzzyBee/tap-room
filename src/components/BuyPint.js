import React from "react";
import PropTypes from "prop-types";

function BuyPint(props) {
  const { keg } = props;
  function handleKegPintBoughtInList(event) {
      event.preventDefault();
      props.onBuyPint({
      name: keg.name,
      brand:keg.brand,
      alcoholContent: keg.alcoholContent,
      description: keg.description,
      pint: keg.pint - event.target.pint.value,
      id: keg.id
    });
  }

  return (
    <div className="form">
      <React.Fragment>
        <form onSubmit={handleKegPintBoughtInList}>
          <input
            type='number'
            name='pint'
            max='124'
            placeholder='Amount' />
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    </div>
  ); 
}
BuyPint.propTypes = {
  onBuyPint: PropTypes.func
}
export default BuyPint;