import React from 'react'
import {Route, Switch} from 'react-router-dom'
import DatasetTable from '../components/datasettable'
import ToolsTable from '../components/toolstable'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={DatasetTable} />
      <Route path="/tools" component={ToolsTable} />
    </Switch>
  </div>
)

export default routes