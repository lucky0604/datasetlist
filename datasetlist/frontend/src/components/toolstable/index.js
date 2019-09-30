import React, {useState, useEffect} from 'react'
import {
  Table,
  Nav,
  Grid,
  Row,
  Col,
  Panel,
  
} from 'rsuite'
import './index.scss'
import request from '../../utils/request'
import SearchGroup from '../search'

const {Column, HeaderCell, Cell, Pagination} = Table
const styles = {width: 100}

export default function ToolsTable(props) {

  const [displayLength, setDisplayLength] = useState(10)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [active, setActive] = useState('home')
  const [dataset, setDataset] = useState([])
  const [searchValue, setSearchValue] = useState('')

  
  const handleSelect = (activeKey) => {
    setActive(activeKey)
  }

  useEffect(() => {
    const getIndexData = async () => {
      const result = await request('/api/datasets')
      setDataset(result)
    }
    getIndexData()
  }, [])

  

  const search = (e) => {
    setSearchValue(e)
   
    const getSearchData = async () => {
      const result = await request('/api/datasets/?search=' + e)
      setDataset(result)
    }
    getSearchData()
      
  }

  const handleChangePage = (dataKey) => {
    setPage(dataKey)
  }

  const handleChangeLength = (dataKey) => {
    setPage(1)
    setDisplayLength(dataKey)
  }

  return (
    <div>
      <Grid fluid>
        <SearchGroup search={search}/>
        <Row>
          
          <Col xs={24}>
            <Table height="600" data={dataset} loading={loading} bordered="true">
              <Column flexGrow={2} align="left" fixed>
                <HeaderCell>Dataset Name</HeaderCell>
                <Cell dataKey="project_name" />
              </Column>
              <Column flexGrow={2} align="left" fixed>
                <HeaderCell>Dataset Owner</HeaderCell>
                <Cell dataKey="contributor_user" />
              </Column>
              <Column flexGrow={3} align="left" fixed>
                <HeaderCell>Dataset Description</HeaderCell>
                <Cell dataKey="desc_info" />
              </Column>
              <Column flexGrow={1} align="left" fixed>
                <HeaderCell>Github</HeaderCell>
                <Cell dataKey="stars" />
              </Column>
              <Column flexGrow={1} align="left" fixed>
                <HeaderCell>License</HeaderCell>
                <Cell dataKey="license_desc" />
              </Column>
            </Table>

            <Pagination
              lengthMenu={[
                {
                  value: 10,
                  label: 10
                },
                {
                  value: 20,
                  label: 20
                }
              ]}
              activePage={page}
              displayLength={displayLength}
              total={dataset.length}
            />
          </Col>
        </Row>
        
      </Grid>
      
    </div>
  )
}