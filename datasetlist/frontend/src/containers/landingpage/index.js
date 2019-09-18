import React, {Component} from 'react'
import Header from '../../components/header'
import DatasetTable from '../../components/datasettable'
import './index.scss'

class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="banner">
          <Header />
        </div>
        <div>
          <DatasetTable />
        </div>
      </div>
    )
  }
}

export default LandingPage