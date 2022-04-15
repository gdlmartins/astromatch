import React, { useState } from "react";
import "./App.css";
import Main from "./pages/main/Main";
import Matches from "./pages/matches/Matches";
import Button from "@material-ui/core/Button";

import styled from "styled-components";
import { UrlBase } from "./constants/constants";
import Axios from "axios";

const ResetButton = styled.button`
  padding: 10px;
`;

const App = () => {
  const [pageMatchMain, setPageMatchMain] = useState(true);
  const [reseted, setReseted] = useState(true);


  const changingePage =()=>{ 
     setPageMatchMain(!pageMatchMain)
  }

  // getting matching - origin (Main.js)


  const putClear = () => {
    const url = `${UrlBase}clear`;

    Axios.put(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const resetAll = () => {
    putClear();

    setTimeout(() => { 
    setReseted(!reseted)
    // console.log(reseted)
    }, 2000)
  };

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={resetAll}>
        Reset
      </Button>
      {pageMatchMain && <Main    
      changingePage={changingePage}/>}
      {pageMatchMain || <Matches   
      reseted={reseted}
      changingePage={changingePage}/>}
    </div>
  );
};

export default App;
