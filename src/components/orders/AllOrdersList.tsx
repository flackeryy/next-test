import {
  Box,
  Card,
  Checkbox,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'
import Scrollbar from '../Scrollbar'
import OrderGroupByDateSwitch from './OrderGroupByDateSwitch'
import OrderInStock from './OrderInStock'
import OrderSearch from './OrderSearch'
import OrderSort from './OrderSort'

export interface OptionSelect {
  label: string
  value: string
}

const columnNameArr = Object.values(t.orders.all_orders.column_names)

interface AllOrdersListProps {}

const AllOrdersList = ({}: AllOrdersListProps) => (
  <Card>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        m: -1,
        p: 2
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <OrderSearch />
        <OrderSort />
        <OrderGroupByDateSwitch />
        <OrderInStock />
      </div>
    </Box>
    <Scrollbar>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              {columnNameArr.map((columnName, index) => (
                <TableCell key={index}>{columnName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/*<TableBody>*/}
          {/*  {products.map((product) => (*/}
          {/*    <CTTableRow*/}
          {/*      product={product}*/}
          {/*      key={product.id}*/}
          {/*      onClick={() => {*/}
          {/*        onProductClick(product.id);*/}
          {/*      }} />*/}
          {/*  ))}*/}
          {/*</TableBody>*/}
        </Table>
        {/* eslint-disable-next-line no-constant-condition */}
        {true ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8 * 4
            }}
          >
            <Typography>{t.orders.all_orders.no_orders}</Typography>
          </div>
        ) : null}
        <TablePagination
          component="div"
          count={100}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          page={0}
          rowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>
    </Scrollbar>
  </Card>
)

export default AllOrdersList
