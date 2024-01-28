import React from 'react'
import { Layout, Button, theme } from 'antd';
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import './index.css'
const { Header} = Layout;

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        我的账号
      </a>
    ),
  },
  
  {
    key: '2',
    danger: true,
    label: '退出登录',
  },
];

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
    <div style={{float:"right"}}>
      <span>欢迎回来</span>
      <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar size="large" icon={<UserOutlined />} />
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    </div>
  </Header>
  )
}

