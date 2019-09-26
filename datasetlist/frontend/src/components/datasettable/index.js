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
        <Column width={150} align="left" fixed>
          <HeaderCell>项目名称</HeaderCell>
          <Cell dataKey="project_name" />
        </Column>
        <Column width={150} align="left" fixed>
          <HeaderCell>项目所有者</HeaderCell>
          <Cell dataKey="contributor_user" />
        </Column>
        <Column width={500} align="left" fixed>
          <HeaderCell>项目描述</HeaderCell>
          <Cell dataKey="desc_info" />
        </Column>
        <Column width={150} align="left" fixed>
          <HeaderCell>获得星数</HeaderCell>
          <Cell dataKey="stars" />
        </Column>
        <Column width={150} align="left" fixed>
          <HeaderCell>License</HeaderCell>
          <Cell dataKey="license_desc" />
        </Column>
      </Table>
    </div>
  )
}