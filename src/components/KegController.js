import React from 'react';
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from './KegDetail';



class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ masterKegList: newMasterKegList, formVisibleOnPage: false });
  }

  ToggleForm = () => {
     if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    if (this.state.selectedKeg != null) {
      return (
        <React.Fragment>
          <KegDetail keg={this.state.selectedKeg} />
          <button onClick={this.ToggleForm}>Return to Keg List</button>
        </React.Fragment>
      )
    }
    else if (this.state.formVisibleOnPage) {
      return (
        <React.Fragment>
          <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
          <button onClick={this.ToggleForm}>Back to List</button>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          {/* <KegList masterKegList={this.state.masterKegList} /> */}
          <KegList masterKegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
          <button onClick={this.ToggleForm}>New Keg</button>
        </React.Fragment>
      )
    }
  }
}


export default KegController;

