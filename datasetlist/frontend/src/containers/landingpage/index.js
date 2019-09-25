import React, { Component, useEffect, useState } from 'react'
import Header from '../../components/header'
import DatasetTable from '../../components/datasettable'
import SearchGroup from '../../components/search'
import './index.scss'
import Grid from '@material-ui/core/Grid'
import request from '../../utils/request'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  bannerText: {
    textAlign: 'center'
  }
}))

function LandingPage() {

  const [dataset, setDataset] = useState([])

  const classes = useStyles()


  useEffect(() => {
    const getIndexData = async () => {
      const result = await request('/api/datasets')
      setDataset(result)
    }
    getIndexData()
  }, [])


  return (
    <div>
      <div className="banner">
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={5} className={classes.bannerText}>
                <h1>Datasets, Annotation Tools & Insights</h1>
                <p>We’re a group of experts who deal with complex data annotations, here we list out all open source annotation tools and datasets for your convenience.</p>
                <a href="awkvect.com" style={{fontSize: '24px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Learn more about us</a>
                <p>If you are struggling with annotation problems my friend, don’t be shy, click here to get free consultation call.</p>
                <a href="share.awkvect.com" style={{fontSize: '24px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Contact us</a>
              </Grid>
              <Grid item xs={3}>
                <img src="https://i0.wp.com/awkvect.com/wp-content/uploads/2018/12/Brain_Pic.png?w=334&ssl=1" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main-content">
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <Grid container direction="column">
              <Grid item>
                <SearchGroup />
                <DatasetTable data={dataset}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </div>
  )

}

export default LandingPage