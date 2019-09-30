import React, { Component, useState } from "react";
import * as moment from "moment";
import "./index.scss";
import {ButtonToolbar, ButtonGroup, Button, Grid, Row, Col} from 'rsuite'
import {Link} from 'react-router-dom'

function Header(props) {

  const [isTools, setIsTools] = useState(false)

  const handleRoute = (e) => {
    if (e.target.getAttribute('href') == '/tools') {
      setIsTools(true)
    } else {
      setIsTools(false)
    }
  }

  return (
    <div className="landing-header">
      <Grid fluid>
        <Row>
          <Col xs={4}></Col>
          <Col xs={14}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button color="orange" appearance="ghost">
                  Updated
                </Button>
                <Button color="orange">2019-09-18</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
          <Col xs={3}>
            {
              isTools ? (
                <Link to="/" onClick={handleRoute} style={{textDecoration: 'none', color: '#ff8900'}}>
                  Datasets
                </Link>
              ): (
                <Link to="/tools" onClick={handleRoute} style={{textDecoration: 'none', color: '#ff8900'}}>
                  Annotation Tools
                </Link>
              )
            }
            
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;
