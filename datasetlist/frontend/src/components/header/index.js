import React, { Component } from "react";
import * as moment from "moment";
import "./index.scss";
import {ButtonToolbar, ButtonGroup, Button, Grid, Row, Col} from 'rsuite'
function Header() {

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
          <Col xs={3}>Datasets</Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;
