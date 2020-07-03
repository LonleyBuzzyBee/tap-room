import React from 'react';
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";



class KegController extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      formVisibleOnPage : false,
      masterKegList : []
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ masterKegList: newMasterKegList, formVisibleOnPage: false });
  }

  ToggleForm = () => {
    if(this.state.formVisibleOnPage)
    {
      this.setState({ formVisibleOnPage: false });
    }
    else
    {
      this.setState({ formVisibleOnPage: true });
    }
  }

  render(){
    if(this.state.formVisibleOnPage)
      {
      return(
        <React.Fragment>
          <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
          <button onClick={this.ToggleForm}>Back to List</button>
        </React.Fragment>
        )
      }
    else {
      return(  
        <React.Fragment>
          <KegList masterKegList={this.state.masterKegList}/>
          <button onClick={this.ToggleForm}>New Keg</button>          
        </React.Fragment>
      )
    }
  }
}

export default KegController;

