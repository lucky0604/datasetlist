import React from 'react'
import {Form, FormGroup,Button, SelectPicker, ControlLabel, FormControl} from 'rsuite'

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

function SearchGroup() {

  return (
    <Form layout="inline">
      <FormGroup>
        <SelectPicker data={data} style={{width: 224}} />
      </FormGroup>

      <FormGroup>
        <SelectPicker data={data} style={{width: 224}} />
      </FormGroup>

      <Button color="orange">Search</Button>
    </Form>
  )
}

export default SearchGroup