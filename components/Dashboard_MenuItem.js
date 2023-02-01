import React,{useEffect,useState} from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Dashboard_SubMenuDropDown from '../components/Dashboard_SubMenuDropDown';
import Link from 'next/link'

const Dashboard_MenuItem = ({item,depth}) => {
  const [showMenu,setShowMenu]=useState(false)
      const handleClick=()=>{
        setShowMenu(!showMenu)
      }
   
    
  return item.submenu && item.submenu.length > 0 ? (
    <>
      <li className='list-none py-2  text-2xl hover:underline hover:text-indigo-700 relative '>
      <button className='py-1 flex justify-around' onClick={handleClick}>
      {item.title}
       {
        depth>1 ? < FaAngleRight className='m-2'/> : <FaAngleDown className='m-2'/>
       }
      </button>

      

     </li>
     
    <div>
      <Dashboard_SubMenuDropDown submenu={item.submenu} depth={depth} showMenu={showMenu}/>
    </div>
     
     </>
      

    ) : (
      <>
        <li className='list-none pb-5 text-xl  hover:text-slate-900 relative '>
          {/* {console.log(item.connect)} */}
          <Link href={`${item.connect}`}>{item.title}</Link>
        </li>
     <hr className='bg-red-500' />

      </>

    )
    
  
}

export default Dashboard_MenuItem