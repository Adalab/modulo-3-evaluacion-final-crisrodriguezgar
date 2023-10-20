//imports dependencias, imagenes, componentes, stylos

import reactLogo from '../images/react.svg';
//import ls from '../services/localStorage';
//import callToApi from '../services/api';
import '../styles/App.scss';
//import { useState, useEffect } from "react";

function App() {
  //funciones, variables, handles,
  /*useEffect(() => {
    callToApi().then((dataApi) => {
      setLoquesea(dataApi);
    });
  }, []);*/

  //html
  return (
    <>
      <img src={reactLogo} alt="" className="logo" />
    </>
  );
}

export default App;
