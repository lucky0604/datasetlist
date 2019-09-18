import React, {Component} from 'react'
import * as moment from 'moment'
import {Grid, Button, ButtonGroup} from '@material-ui/core'
import './index.scss'
import blue from '@material-ui/core/colors/blue'
import {makeStyles, createMuiTheme} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  buttonFont: {
    color: '#6ec1e4 !important',
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[300]
    },
  }
})

function Header() {
  const classes = useStyles()
  return (
    <div className="landing-header">
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <ButtonGroup size="small" aria-label="small button group" color="primary">
                  <Button disabled className={classes.buttonFont}>Updated</Button>
                  <Button>2019-09-18</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <a href="" className="">Datasets</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
      
    </div>
    
  )
}

export default Header