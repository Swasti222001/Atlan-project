import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './tables.module.css'

const table = ({ tableRowData, tableColData }) => {
  return (
    <div className={styles.tableContainer}>
      {/* <Box className={styles.tableContainer}> */}
      <Table>
        <TableHead>
          <TableRow>
            {
              tableColData && tableColData.map((cell) =>
                <TableCell>{cell}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData && tableRowData.map((row, i) => (
            <TableRow
            >
              {
                tableColData && tableColData.map((cell) =>
                  <TableCell>
                    {row[cell]}
                  </TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </Box> */}
    </div>
  )
}

export default table
