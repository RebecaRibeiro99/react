import React,{useState, useEffect} from "react";
import { Root } from "./Routes/Root";
import{DataContext, estadoContexto} from "./Context/data"


function App() {


  return (
    <>
    <DataContext.Provider value = {estadoContexto}>
      <Root/>
      </DataContext.Provider>
    </>
  );
}

export default App;
