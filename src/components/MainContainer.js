import React from 'react'
import"./myStyle.css"; 
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
//import WorkArea from './WorkArea';
const MainContainer = () => {
  return (
    <div className='main-container'>
<Sidebar/>
{/*<WorkArea/>*/ }
<ChatArea/>

    </div>
  )
}

export default MainContainer