import React, { Component } from "react";
import * as moment from "moment";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  disableButton: {
    color: "#ff9800 !important",
    border: '1px solid #ff9800 !important'
  },
  fillButton: {
    color: '#fff !important',
    backgroundColor: '#ff9800 !important'
  },
  headerText: {
    textAlign: 'center'
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="landing-header">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.headerText}>
          <Grid container spacing={3} direction="column">
            <Grid item xs={11}>
              <ButtonGroup
                size="small"
                aria-label="small button group"
                color="primary"
              >
                <Button disabled className={classes.disableButton}>
                  Updated
                </Button>
                <Button className={classes.fillButton}>2019-09-18</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.headerText}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <a href="" style={{textDecoration: 'none', color: '#ff9800'}}>
                Datasetlist
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
