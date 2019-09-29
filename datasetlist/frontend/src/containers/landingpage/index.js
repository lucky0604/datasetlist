import React, { Component, useEffect, useState } from 'react'
import Header from '../../components/header'
import './index.scss'
import {Grid, Row, Col, FlexboxGrid} from 'rsuite'

function LandingPage() {
  return (
    <div>
      <div className="banner">
        <Header />
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10} className="banner-text">
            <h1>Datasets, Annotation Tools & Insights</h1>
            <p>We’re a group of experts who deal with complex data annotations, here we list out all open source annotation tools and datasets for your convenience.</p>
            <a href="awkvect.com" style={{fontSize: '24px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Learn more about us</a>
            <p>If you are struggling with annotation problems my friend, don’t be shy, click here to get free consultation call.</p>
            <a href="share.awkvect.com" style={{fontSize: '24px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Contact us</a>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10}>
            <img src="https://i0.wp.com/awkvect.com/wp-content/uploads/2018/12/Brain_Pic.png?w=334&ssl=1" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  )
}

export default LandingPage