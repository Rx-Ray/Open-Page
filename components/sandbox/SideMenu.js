import React from 'react'
import { Layout, Menu} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';
import { withRouter } from 'react-router-dom';
const {Sider} = Layout;

const itemList = [
  {
    key:"/home",
    icon:<VideoCameraOutlined />,
    title:"首页"
  },
  /*{
    key: '/right-manage',
    icon: <UserOutlined />,
    title: '权限管理',
    children:[
      {
        key:'/right-manage/role/list',
        icon: <UserOutlined />,
        title:'角色列表'
      },
      {
        key:'/right-manage/right/list',
        icon: <UserOutlined />,
        title:'权限列表'
      }
    ]
  },*/
  {
    key: '3',
    icon: <UploadOutlined />,
    title: '发布公告',
    children:[
      {
        key:'/announcement-manage/add',
        icon: <UploadOutlined />,
        title:'撰写公告'
      },
     /* {
        key:'/announcement-manage/draft',
        icon: <UploadOutlined />,
        title:'草稿箱'
      }*/
    ]
  },

]

function SideMenu(props) {

const renderItem=(itemList)=>{
  return itemList.map(item => {
    if(item.children){
      return <SubMenu key={item.key} icon={item.icon} title={item.title}
      >
        {renderItem(item.children)}
      </SubMenu>
      
    }
    
    return <Menu.Item key={item.key} icon={item.icon} title={item.title} onClick={()=>{
       props.history.push(item.key)
    }}
    >{item.title}</Menu.Item>

  })

}

  return (
    <Sider trigger={null} collapsible collapsed={false} >
    <div className="logo">openpage公告管理</div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['/home']}
    >
      {renderItem(itemList)}
    </Menu>
  </Sider>
  )
}
export default withRouter(SideMenu)
