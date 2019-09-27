import React from "react"
import routes from './routes'
import 'rsuite/dist/styles/rsuite-default.css'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App;
