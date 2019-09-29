import React from "react"
import routes from './routes'
import 'rsuite/dist/styles/rsuite-default.css'
import {BrowserRouter as Router} from 'react-router-dom'
import LandingPage from './containers/landingpage'
import {FlexboxGrid} from 'rsuite'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      
      <Router>
        <LandingPage />
        <div className="main-content">
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={16}>
              
              {routes}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
