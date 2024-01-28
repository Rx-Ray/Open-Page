import { Card, List } from 'antd';
import { Col, Row } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageHeader } from '@ant-design/pro-layout';
import _ from 'lodash'


export default function Home() {
const [list,setlist] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/announcement").then(res=>{
      setlist(Object.entries(_.groupBy(res.data,item=>item.categoryId)))
      console.log(Object.entries(_.groupBy(res.data,item=>item.categoryId)))
    })
  },[])
const getName=(n)=>{
  if(n==='1'){
    return "通知公告"
  }else if (n==='2'){
    return "实验室荣誉"
  }else if(n==='3')
  {
    return "学长讲堂"
  }else if(n==='4')
  {
    return "实验室介绍"
  }
}  

  return (
    <div style={{width:"95%",margin:'0 auto'}}>
       <PageHeader
      className="site-page-header"
      title="OpenLab实验室公告"
      subTitle="查看公告"
      />
     <Row gutter={[36,36]}>
      {
        list.map(item =>
          <Col span={12} key={item[0]}>
          <Card title={getName(item[0])} bordered={true} hoverable={true}>
            <List
              size="small"
              bordered
              dataSource={item[1]}
              pagination={{
                pageSize:4
              }}
             renderItem={(data) => <List.Item><a href={`http://localhost:3000/#/preview/${data.id}`}>{data.title}</a></List.Item>}
            />
          </Card>
        </Col>
        )
      }
        
     </Row> 
  

    </div>
  )
}



 /*  axios.get("http://localhost:8000/posts").then(res=>{
      console.log(res.data)
    })*/
   /* axios.post("http://localhost:8000/posts",{
      title:"title",
    })*/
    // 修改 put（替换式）
    /*axios.put("http://localhost:8000/posts/1(id)",{
      title:"1111修改"
    })*/
    // 更新（补丁式）
    /*axios.patch("http://localhost:8000/posts/1",{
      title:"1111修改"})*/
    //删除
    //axios.delete("http://localhost:8000/posts/1")

    // _embed
    /*axios.get("http://localhost:8000/posts?_embed=comments").then(res=>(
      console.log(res.data)
    ))*/

    // _expand
    /*axios.get("http://localhost:8000/comments?_expand=posts").then(res=>{
      console.log(res.data)
  })*/