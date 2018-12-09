import React from 'react'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const EditMeasurementForm = ({ handleChange, edit, initialValues }) => {
  const { name, unit, id, upperBound, lowerBound } = initialValues
  return (
    <div>
      <Typography variant="h2" align="center" style={{ marginTop: '30px' }}>Edit</Typography>
      <form style={{ marginLeft: '30px', marginTop: '30px' }} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid item>
            <TextField
              required
              value={name}
              id="name"
              label="Name"
              helperText="Name the measurement to be added"
              onChange={() => handleChange(event)}
              inputProps={{ maxLength: 40 }}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              value={unit}
              id="unit"
              label="Unit"
              margin="normal"
              variant="outlined"
              inputProps={{ maxLength: 40 }}
              helperText="Unit of your measurement (e.g. ml/l)"
              onChange={() => handleChange(event)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="id"
              value={id}
              label="Identifier"
              variant="outlined"
              margin="normal"
              helperText="Optional"
              inputProps={{ maxLength: 40 }}
              onChange={() => handleChange(event)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>

          <Grid item>
            <TextField
              required
              value={upperBound}
              id="upperBound"
              variant="outlined"
              label="Upper bound"
              inputProps={{ max: '10', step: 0.01 }}
              margin="normal"
              helperText="The upper bound of the optimal value"
              onChange={() => handleChange(event)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              value={lowerBound}
              id="lowerBound"
              variant="outlined"
              type="number"
              margin="normal"
              inputProps={{ maxLength: 10 }}
              label="Lower bound"
              helperText="The lower bound of the optimal value"
              onChange={() => handleChange(event)}
            />
          </Grid>
        </Grid>
        <Button onClick={edit} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
          Save
        </Button>
      </form>
    </div>
  )
}


export default EditMeasurementForm
