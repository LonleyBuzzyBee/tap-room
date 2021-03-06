import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      description: event.target.description.value,
      pint: event.target.description.value = 124,
      id: v4()
    })
  }

  return (
    <div className="form">
      <React.Fragment>
        <div className="formChild">
         <h3>Fill out the form below to create a new keg</h3> 
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='name'
            placeholder='name' />
          <input
            type='text'
            name='brand'
            placeholder='brand' />
          <input
            type='text'
            name='alcoholContent'
            placeholder='alcoholContent' />
          <textarea
            name='description'
            placeholder='Description' />
          <button type='submit'>Submit</button>
          </form>
        </div>
      </React.Fragment>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;