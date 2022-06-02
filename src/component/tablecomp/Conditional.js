import React from 'react'
import TabJS from './table'
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
import { catkey } from './KeyComp'
import { cuskey } from './KeyComp'
import { empterrkey } from './KeyComp'
import { empkey } from './KeyComp'
import { ordetkey } from './KeyComp'
import { ordkey } from './KeyComp'
import { prodkey } from './KeyComp'
import { regkey } from './KeyComp'
import { shipkey } from './KeyComp'
import { suppkey } from './KeyComp'
import { terrkey } from './KeyComp'

// const cat = JSON.parse(categories)
// const cus = JSON.parse(customers)
// const empterr = JSON.parse(emp_terr)
// const employee = JSON.parse(emp)
// const odet = JSON.parse(order_det)
// const ord = JSON.parse(order)
// const prod = JSON.parse(products)
// const reg = JSON.parse(regions)
// const ship = JSON.parse(shippers)
// const supp = JSON.parse(suppliers)
// const terr = JSON.parse(territories)

const Conditional = ({ tab }) => {
  return (
    <div>
      <TabJS>
        {
          tab === { categories, catkey }
        }
      </TabJS>
    </div>
  )
}

export default Conditional