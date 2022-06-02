import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './tables.module.css'
import { catkey } from './KeyComp';
import { categories } from '../../Tables/categories'


const Categorytable = () => {
  return (
    <div className={styles.tableMainContainer}>
      {/* <Box className={styles.tableContainer}> */}
      <Table>
        <TableHead>
          <TableRow className={styles.tableTopCellCont}>
            {
              catkey && catkey.map((cell) =>
                <TableCell className={styles.tableTopCell} >{cell}</TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {categories && categories.map((row, i) => (
            <TableRow
            >
              {
                catkey && catkey.map((cell) =>
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

export default Categorytable