import React, {useState} from 'react'
import {ButtonToolbar, Form, FormGroup,Button, SelectPicker, ControlLabel, FormControl, Input} from 'rsuite'
import './index.scss'

const data = [
  {
    label: 'Eugenia',
    value: 'Eugenia',
    role: 'Master'
  }, {
    label: 'Kariane',
    value: 'Kariane',
    role: 'Master'
  }, {
    label: 'Louisa',
    value: 'Louisa',
    role: 'Master'
  }, {
    label: 'Marty',
    value: 'Marty',
    role: 'Master'
  }, {
    label: 'Kenya',
    value: 'Kenya',
    role: 'Master'
  }
]

function SearchGroup(props) {

  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (e) => {
    setSearchValue(e)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    // resetInputField()
  }

  return (
    <Form layout="inline">
      {/* <FormGroup>
        <SelectPicker data={data} style={{width: 224}} />
      </FormGroup>

      <FormGroup>
        <SelectPicker data={data} style={{width: 224}} />
      </FormGroup> */}
      {/* <FormGroup>
        <ControlLabel srOnly>Keywords</ControlLabel>
        <FormControl placeholder="Keywords" name={searchValue} />
      </FormGroup> */}
      <Input placeholder="Keywords" onChange={handleSearchInputChanges} />
      <Button onClick={callSearchFunction} className="searchBtn" style={{color: '#000 !important'}} color="orange">Search</Button>
      
    </Form>
  )
}

export default SearchGroup