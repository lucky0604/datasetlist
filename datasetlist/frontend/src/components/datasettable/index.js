import React, {useState, useEffect} from 'react'
import {
  Table,
  Nav,
  Grid,
  Row,
  Col,
  Panel
} from 'rsuite'

const {Column, HeaderCell, Cell, Pagination} = Table
const styles = {width: 100}

const SideNav = ({active, onSelect, ...props}) => {
  return (
    <div>
      <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={styles}>
        <Nav.Item eventKey="home">
          All
        </Nav.Item>
        <Nav.Item eventKey="cv">
          CV
        </Nav.Item>
        <Nav.Item eventKey="nlp">
          NLP
        </Nav.Item>
        <Nav.Item eventKey="self_driving">
          Self-driving
        </Nav.Item>
        <Nav.Item eventKey="qa">
          QA
        </Nav.Item>
        <Nav.Item eventKey="audio">
          Audio
        </Nav.Item>
        <Nav.Item eventKey="medical">
          Medical
        </Nav.Item>
      </Nav>
    </div>
    
  )
}

export default function DatasetTable(props) {

  const [displayLength, setDisplayLength] = useState(10)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [active, setActive] = useState('home')

  var rows = []
  if (props.data.length > 0) {
    rows = props.data
  }

  const handleSelect = (activeKey) => {
    setActive(activeKey)
  }

  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={3}>
            <Panel header="Category" bordered>
              <SideNav appearance="subtle" active={active} onSelect={handleSelect}/>
            </Panel>
          </Col>
          <Col xs={21}>
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
          </Col>
        </Row>
        

      </Grid>
      
    </div>
  )
}