import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
// import table
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import paper
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import expand panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: '0 auto'
  },
  table: {
    minWidth: 650
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiPaperElevation1: {
    boxShadow: 'none !important'
  }
}))

function createData(name, catories, fat, carbs, protein) {
  return {name, catories, fat, carbs, protein}
}

export default function DatasetTable(props) {
  const classes = useStyles()
  var rows = []
  if (props.data.length > 0) {
    rows = props.data
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>项目名称</TableCell>
            <TableCell align="left">项目所有者</TableCell>
            <TableCell align="left">使用语言</TableCell>
            <TableCell align="left">项目描述</TableCell>
            <TableCell align="left">获得星数</TableCell>
            <TableCell align="left">License</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.project_name}
              </TableCell>
              <TableCell align="left">{row.contributor_user}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">
                <ExpansionPanel className={classes.MuiPaperElevation1}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{row.desc_info}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </TableCell>
              <TableCell align="left">{row.stars}</TableCell>
              <TableCell align="left">{row.license_desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}