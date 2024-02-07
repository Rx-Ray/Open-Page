import { FloatButton } from 'antd';
import {  CommentOutlined,CloudServerOutlined,HomeOutlined,UsergroupAddOutlined} from '@ant-design/icons';
//这两个库需要npm install指令
const App1 = () => (
    //使用时请自行剪裁
    <>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
          top:1,
        }}
        
      >
        <FloatButton icon={<HomeOutlined />} tooltip={'个人主页'} href='###' target='_self' badge={{color:'blue'}}></FloatButton>
        <FloatButton icon={<CloudServerOutlined />} tooltip={"往期资料"} href='###'target='_blank' badge={{color:'blue'}}></FloatButton>
        <FloatButton  icon={<CommentOutlined />} tooltip={"OpenPage入口"} href='###' target='_blank' badge={{color:'blue'}}></FloatButton>
        <FloatButton icon={<UsergroupAddOutlined />} tooltip={"组队界面"} href="###" target='_blank' badge={{color:'blue'}}></FloatButton>
      </FloatButton.Group>
     
    </>
  );
  export default App1;