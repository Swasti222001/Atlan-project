import { useState, useEffect } from 'react'
// import InputFields from "../Inputcomp/Input";
import TabJS from './TableComp'
import { categories } from '../../Tables/categories'
import { customers } from '../../Tables/customers'
// import { emp_terr } from '../../Tables/employee_territories'
// import { emp } from '../../Tables/employees'
// import { order_det } from '../../Tables/order_details'
// import { order } from '../../Tables/orders'
import { products } from '../../Tables/products'
import { regions } from '../../Tables/regions'
import { shippers } from '../../Tables/shippers'
import { suppliers } from '../../Tables/suppliers'
import { territories } from '../../Tables/territories'
import { catkey } from './KeyComp'
import { cuskey } from './KeyComp'
// import { empterrkey } from './KeyComp'
// import { empkey } from './KeyComp'
// import { ordetkey } from './KeyComp'
// import { ordkey } from './KeyComp'
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

const Conditional = ({ table }) => {
  const [tableData, setTableData] = useState({ colData: [], rowData: [] })
  // const [inputData, setInputData] = useState({ inpData: [] })
  useEffect(() => {
    setTableData({
      colData: table === "categories" ? catkey
        : table === "customers" ? cuskey
          : table === "products" ? prodkey
            : table === "shippers" ? shipkey
              : table === "suppliers" ? suppkey
                : table === "territories" ? terrkey
                  : table === "regions" ? regkey
                    : [],
      rowData: table === "categories" ? categories
        : table === "customers" ? customers
          : table === "products" ? products
            : table === "shippers" ? shippers
              : table === "suppliers" ? suppliers
                : table === "regions" ? regions
                  : table === "territories" ? territories
                    : []
    })
  }, [table])
  // useEffect(() => {
  //   setInputData({
  //     inpData: input === "categories" ? "Select * from categories"
  //       : {}
  //   })
  // }, [input])
  return (
    <div>
      <TabJS
        tableColData={tableData.colData}
        tableRowData={tableData.rowData}
      />
      {/* <InputFields inputFieldData={inputData.inpData} /> */}

    </div>
  )
}

export default Conditional