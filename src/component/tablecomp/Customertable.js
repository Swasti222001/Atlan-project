import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './tables.module.css'
import { cuskey } from './KeyComp';
import { customers } from '../../Tables/customers'


const Customertable = () => {
  return (
    <div className={styles.tableContainer}>
      <Box className={styles.tablebox}>
        <Table>
          <TableHead>
            <TableRow>
              {
                cuskey && cuskey.map((cell) =>
                  <TableCell >{cell}</TableCell>
                )
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {customers && customers.map((row, i) => (
              <TableRow
              >
                {
                  cuskey && cuskey.map((cell) =>
                    <TableCell>
                      {row[cell]}
                    </TableCell>
                  )
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  )
}

export default Customertable