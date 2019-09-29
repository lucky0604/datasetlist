import React from 'react'
import {FlexboxGrid, Icon, ButtonToolbar, IconButton} from 'rsuite'
import './index.scss'

const logo = require('../../logo.png')

export default function Footer() {
  return (
    <div className="footer">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5}>
          <img src={logo} style={{width: '70%'}}/>
          <p style={{color: '#fff', lineHeight: '1.5'}}>
            We offer industry leading image annotation service at low cost, high efficiency, and short feedback loop so you get the images you need on time for your world changing applications.
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3} style={{color: '#fff', lineHeight: '0.8'}}>
          <h4>Industry</h4>
          <div style={{backgroundColor: '#fff', height: '1px', width: '100px', marginTop: '10px'}}></div>
          <div className="link-group">
            <p><a className="alternal-link" href="https://awkvect.com/self-driving/">Self Driving</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/industrial/">Industrial 4.0</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/health-care/">Health Care</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/new-retail/">New Retail</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/security/">Security</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/agriculture/">Agriculture</a></p>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3} style={{color: '#fff', lineHeight: '0.8'}}>
          <h4>Service</h4>
          <div style={{backgroundColor: '#fff', height: '1px', width: '100px', marginTop: '10px'}}></div>
          <div className="link-group">
            <p><a className="alternal-link" href="https://awkvect.com/semantic-segmentation/">Semantic Seg</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/polygon-annotation/">Polygon</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/bounding-box/">Bounding Box</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/landmark-annotation/">Landmark</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/line-annotation/">Line</a></p>
            <p><a className="alternal-link" href="https://awkvect.com/categorization/">Categorization</a></p>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3} style={{color: '#fff', lineHeight: '1'}}>
          <h4>Contact Us</h4>
          <div style={{backgroundColor: '#fff', height: '1px', width: '100px', marginTop: '10px'}}></div>
          <div className="link-group">
            <p><Icon icon="envelope" style={{paddingRight: '5px'}}/><a className="alternal-link" href="https://awkvect.com/contact/">service@awkvect.com</a></p>
            <p><Icon icon="map-marker" style={{paddingRight: '10px'}} /><a className="alternal-link">75 Tiverton Ct, Markham, ON, Canada, L3R 9V2</a></p>
            <ButtonToolbar style={{marginTop: '10px'}}>
              <IconButton icon={<Icon icon="youtube-play" />} color="white" circle/>
              <IconButton icon={<Icon icon="web" />} color="white" circle/>
            </ButtonToolbar>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  )
}