import React, { useEffect, useState,useRef} from 'react'
import { PageHeader } from '@ant-design/pro-layout';
import { Button, Select, Steps, message, notification } from 'antd';
import './Announcement.css'
import {  Form, Input } from 'antd';
import axios from 'axios';
import AnnouncementEditor from '../../../components/announcement-manage/AnnouncementEditor';
export default function AnnouncementAdd(props) {
  const[current,setCurrent] =useState(0)
  const[formInfo,setformInfo]=useState({})//储存标题分类
  const[content,setcontent]=useState("")//储存内容

  const {Option} = Select
  const handleNext =()=>{
    if(current===0){
      AnnouncementForm.current.validateFields().then(res=>{
        //console.log(res)
        setformInfo(res)
        setCurrent(current+1)
      }).catch(
        error=>{
          console.log(error)
        }
      )
    }else{
      if(content===""||content.trim()==="<p></p>"){
        message.error("公告内容不能为空！")
      }else {
      console.log(formInfo,content)
      setCurrent(current+1)
      }
    }
    
  }
  const handlePrevious =()=>{
    setCurrent(current-1)
  }
  const[categoryList,setcategoryList] =useState([])
  
  const handleSave =(auditState)=>{
    axios.post(`http://localhost:8000/announcement`,{
      ...formInfo,
      "content":content,
      "auditState":0,//发布1,存草稿箱0
      "publishState":0,//发布
      "createTime":Date.now()
      //"publishTime":0
    }).then(res=>{
      props.history.push(auditState===0?'/announcement-manage/draft':'/home')

      notification.info({
        message:`通知`,
        description:`您可以到${auditState===0?'草稿箱':'主页'}中查看您的公告`,
        placement:'bottomRight',
      })
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:8000/option").then(res=>{
      setcategoryList(res.data)
    })

  },[])
  const AnnouncementForm = useRef(null)
  
  return (
    <div>
      <PageHeader
      className="site-page-header"
      title="撰写公告"
      />
    <Steps
    current={current}
    items={[
      {
        title: '基本信息',
        description:'公告标题，公告分类',
      },
      {
        title: '公告内容',
        description:'公告主体内容',
      },
      {
        title: '公告提交',
        description:'保存草稿或者提交',
      },
    ]}
    />
    <div style={{marginTop:"50px"}}>
      <div className={current===0?'':'active'}>
        <Form
        name="basic"
        ref={AnnouncementForm}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 120,
        }}
      >
          <Form.Item
            label="公告标题"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入公告标题!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="公告分类"
            name="categoryId"
            rules={[
              {
                required: true,
                message: '请选择公告分类!',
              },
            ]}
          >
            <Select>
              {
                categoryList.map(item=>
                <Option value={item.id} key={item.id}>{item.title}
                </Option>)
              }
            </Select>
          </Form.Item>
        </Form>
      </div>
      <div className={current===1?'':'active'}>
        <AnnouncementEditor getContent={(value)=>{
            //console.log(value)
            setcontent(value)
        }}></AnnouncementEditor>
      </div>
      <div className={current===2?'':'active'}></div>
    </div>



    <div style={{marginTop:"50px"}}>
        {
            current>0&&<Button onClick={handlePrevious}>上一步</Button>
        }
        {
            current<2&&<Button type="primary" onClick={handleNext}>下一步</Button>
        }
        
        {
            current===2&&<span>
                {/* <Button type="primary" onClick={()=>handleSave(0)}>保存草稿箱</Button>*/}
                <Button danger onClick={()=>handleSave(1)}>发布公告</Button>
            </span>
        }  
    </div>
    </div>
  )
}
