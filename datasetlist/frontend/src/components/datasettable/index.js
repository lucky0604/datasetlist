import React, {useState, useEffect} from 'react'
import {
  Table,
} from 'rsuite'

const {Column, HeaderCell, Cell, Pagination} = Table

export default function DatasetTable(props) {

  const [displayLength, setDisplayLength] = useState(10)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  var rows = []
  if (props.data.length > 0) {
    rows = props.data
  }
  return (
    <div>
      <Table height="600" data={rows} loading={loading} bordered="true">
        <Column flexGrow={2} align="left" fixed>
          <HeaderCell>项目名称</HeaderCell>
          <Cell dataKey="project_name" />
        </Column>
        <Column flexGrow={2} align="left" fixed>
          <HeaderCell>项目所有者</HeaderCell>
          <Cell dataKey="contributor_user" />
        </Column>
        <Column flexGrow={3} align="left" fixed>
          <HeaderCell>项目描述</HeaderCell>
          <Cell dataKey="desc_info" />
        </Column>
        <Column flexGrow={1} align="left" fixed>
          <HeaderCell>获得星数</HeaderCell>
          <Cell dataKey="stars" />
        </Column>
        <Column flexGrow={1} align="left" fixed>
          <HeaderCell>License</HeaderCell>
          <Cell dataKey="license_desc" />
        </Column>
      </Table>
    </div>
  )
}