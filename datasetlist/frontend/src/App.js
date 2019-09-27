import React from "react";
import LandingPage from "./containers/landingpage";
import 'rsuite/dist/styles/rsuite-default.css'
import './custom_theme/theme.less'
import {Button} from 'rsuite'

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
