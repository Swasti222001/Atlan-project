// import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './tables.css'

const TableComp = ({ tableRowData, tableColData }) => {
  return (
    <div className="tableMainContainer">
      {/* <Box className={styles.tableContainer}> */}
      <Table>
        <TableHead>
          <TableRow className="tableTopCellCont">
            {
              tableColData && tableColData.map((cell) =>
                <TableCell className="tableTopCell">{cell}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData && tableRowData.map((row, i) => (
            <TableRow
            >
              {
                tableColData && tableColData.map((cell) =>
                  <TableCell className="tableBodyCell">
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

export default TableComp
