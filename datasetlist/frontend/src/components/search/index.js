import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: 30
  },
  button: {
    margin: theme.spacing(1),
    color: '#ffffff !important'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  selectControl: {
    minHeight: 30,
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 2
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 120
    }
  }
}


function SearchGroup() {
  const classes = useStyles()

  const [values, setValues] = React.useState({
    age: '',
    name: 'hai'
  })

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{padding: '0'}}>
          Stars
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-simple',
          }}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Project Type
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" className={classes.button}>Search</Button>
    </form>
  )
}

export default SearchGroup