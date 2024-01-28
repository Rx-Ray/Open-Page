import React, { useState } from 'react'
import { Descriptions } from 'antd';
import { useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
export default function Preview(props) {
  

  const items = [
    {
      key: '1',
      label: '发布日期',
      children: moment(Date.now()).format("YYYY/MM/DD") ,
    },
  ];
  const [announcementinfo,setannouncementinfo]=useState([{title:"",content:""}])
  
  useEffect(()=>{
    
    axios.get(`http://localhost:8000/announcement/${props.match.params.id}`).then(res=>{
      console.log(res.data) 
    setannouncementinfo(res.data)
     })   
   },[props.match.params.id])
   console.log(announcementinfo)
  //
  /* 
      */



  return(
    
    <div>
      <Descriptions title={announcementinfo.title} items={items} />
      <div dangerouslySetInnerHTML={{__html:announcementinfo.content}} style={{
        
      }}>

      </div>
    </div>
  
    )
    }

