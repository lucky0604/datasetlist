import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/landingpage'
import {ThemeProvider} from '@material-ui/styles'
import {makeStyles, createMuiTheme} from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
