import React from 'react';
import { Layout, Flex } from 'antd';
import { Divider } from 'antd';
import { Progress } from 'antd';
import { Card } from 'antd';
import { Avatar, List } from 'antd';



const { Header,  Sider, Content } = Layout;

function Show() {
  const data = [
    {
      title: '项目人员 1',
    },
    {
      title: '项目人员 2',
    },
    {
      title: '项目人员 3',
    },
    {
      title: '项目人员 4',
    },
  ];

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100,
  paddingInline: 48,
  lineHeight: '100px',
  backgroundColor: 'rgb(0,50,150)',
  fontSize:"30px"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#000',
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#eff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};
const ideaName = "项目名称"
const progTeam = "项目人员"
const progIdea ="项目想法"
const percent = 1

function judge(percent){
  if(percent===0)
  return <Progress percent={0} status="exception"/>
  else if(percent===1)
  return <Progress percent={30} />
  else if(percent===2)
  return <Progress percent={50}  />
  else if(percent===3)
  return <Progress percent={70}  />
  else if(percent===4)
  return <Progress percent={100} />
}
  return (
  <Flex style={{height: '100%'}}>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>{ideaName}</Header>
      <Layout>
        <Sider width="30%" style={siderStyle}>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="###">{item.title}</a>}
          description="个人简介"
        />
      </List.Item>
    )}
  />
        </Sider>
        <Content style={contentStyle}>
        <div style={{height:"25%"}}>
          <div style={{fontWeight:'bold',fontSize:"30px",fontFamily:"微软雅黑"}}>
          完成进度
          </div>
        {judge(percent)}
        </div>
        <Divider colorSplit={"#000"}/>
        <div style={{height:"75%"}}>
        <Card title="项目想法" bordered={false} style={{ width: "90%",height:"90%",marginLeft:"5%",marginTop:"5%"}}>
          <div>{progIdea}</div>
        </Card>
        </div>
        </Content>
      </Layout>
    </Layout>
  </Flex>
  );
}

export default Show;
