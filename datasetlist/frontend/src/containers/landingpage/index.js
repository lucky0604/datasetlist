import React, {Component} from 'react'
import Header from '../../components/header'
import DatasetTable from '../../components/datasettable'
import SearchGroup from '../../components/search'
import './index.scss'
import Grid from '@material-ui/core/Grid'

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
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <Grid container direction="column">
              <Grid item>
                <SearchGroup />
                <DatasetTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LandingPage