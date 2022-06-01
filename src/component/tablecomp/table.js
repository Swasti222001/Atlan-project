import React from 'react'
import { categories } from '../../Tables/categories'
import { customers } from '../../Tables/customers'
import { emp_terr } from '../../Tables/employee_territories'
import { emp } from '../../Tables/employees'
import { order_det } from '../../Tables/order_details'
import { order } from '../../Tables/orders'
import { products } from '../../Tables/products'
import { regions } from '../../Tables/regions'
import { shippers } from '../../Tables/shippers'
import { suppliers } from '../../Tables/suppliers'
import { territories } from '../../Tables/territories'

const cat= JSON.parse(categories)
const cus= JSON.parse(customers)
const empterr= JSON.parse(emp_terr)
const employee= JSON.parse(emp)
const odet= JSON.parse(order_det)
const ord= JSON.parse(order)
const prod= JSON.parse(products)
const reg= JSON.parse(regions)
const ship= JSON.parse(shippers)
const supp= JSON.parse(suppliers)
const terr= JSON.parse(territories)
const table = () => {
  return (
    <div>table</div>
  )
}

export default table