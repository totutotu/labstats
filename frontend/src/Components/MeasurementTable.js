import React from 'react'

import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'


const headers = ['Name', 'Unit', 'Upper bound', 'Lower bound', 'Identifier', 'Edit', 'Remove']

const MeasurementTable = ({ data }) => (
  <div>
    <Typography variant="h2" align="center" style={{ marginTop: '30px' }}>Measurements</Typography>
    <Paper align="center" style={{ marginTop: '30px', marginLeft: '20px', marginRight: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => <TableCell key={header}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row._id}>{/* eslint-disable-line */}
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.unit}</TableCell>
              <TableCell>{row.bounds.upper}</TableCell>
              <TableCell>{row.bounds.lower}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell><Fab size="small"><EditIcon /></Fab></TableCell>
              <TableCell><Fab size="small" color="secondary"><DeleteForeverIcon style={{ color: 'black' }} /></Fab></TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
  </div>
)

export default MeasurementTable
