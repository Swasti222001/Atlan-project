import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './tables.module.css'

const TableComp = ({ tableRowData, tableColData }) => {
  return (
    <div className={styles.tableMainContainer}>
      {/* <Box className={styles.tableContainer}> */}
      <Table>
        <TableHead>
          <TableRow className={styles.tableTopCellCont}>
            {
              tableColData && tableColData.map((cell) =>
                <TableCell className={styles.tableTopCell}>{cell}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData && tableRowData.map((row, i) => (
            <TableRow
            >
              {
                tableColData && tableColData.map((cell) =>
                  <TableCell className={styles.tableBodyCell}>
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
