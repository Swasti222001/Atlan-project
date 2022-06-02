import './App.css';
import MainLayout from './layouts/mainlayout';
import { useState } from 'react';
import Conditional from './component/tablecomp/Conditional'
import ListJS from './component/listcomp/list'
// import Categorytable from './component/tablecomp/Categorytable';

function App() {
  const [table, settable] = useState()
  return (
    <div className="App">
      {/* <ListJS></ListJS> */}
      {/* <Conditional></Conditional> */}
      {/* <Categorytable></Categorytable> */}
      <MainLayout />

    </div>
  );
}

export default App;
