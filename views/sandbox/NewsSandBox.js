import React from 'react' 
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'

import { Layout } from 'antd'

import { theme } from 'antd';
import './NewsSandBox.css'
import ARouter from '../../components/sandbox/ARouter';



export default function NewsSandBox() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Content } = Layout;
 
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <ARouter></ARouter>
      
          
        </Content>
      </Layout>
      
    </Layout>
  )
}
