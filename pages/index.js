import userId from "./users/[userId]";
import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "../lib/axios"

export const getServerSideProps=async(context)=> {

  const users= await userId()
   return {
    props:{
      users:users,
    }
   }
}

export default function Home({users}) {
  
  const [pageId,setPageId]=useState()
  const handleClick=(page)=>{
    setPageId(page)
  }
  
  let active=1
  let items = [];
  for (let number = 1; number <= users.last_page; number++) {
    items.push(
      <Pagination.Item key={number} active={number===active} onClick={()=>handleClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      {
          users.data.length > 0 ?
          users.data.map((item)=>(
              <Link key={item.id} href={'user/'+item.id}>
               {item.id}. {item.name}<br/><br/>
              </Link>
            ))  
            :
            <p>No Data Found</p>
        }
            <Pagination>
            {items}
            </Pagination>
    </div>
  )
}

