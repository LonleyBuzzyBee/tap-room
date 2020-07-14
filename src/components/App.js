import React from "react";
import Header from "./Header";
import KegController from "./KegController";


function App(){
  return ( 
   <div className="parent">
      <React.Fragment>
        <Header />
        <KegController />
      </React.Fragment>
    </div> 
  );
}

export default App;