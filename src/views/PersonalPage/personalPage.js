import "./personalPage.css"
import logo from "./img/logo-l3.png"
export default function PersonalPage() {
  return (
    <div className="personalpage">
      <Personal_topbar />
      <Leftfunction />
    </div>
  )
}

function Personal_topbar() {
  return (
    <div className="personal_topbar" style={{ clear: "both" }}>
      <img src={logo} height="60px" alt="logo" className="topbar_logo" />
      <div className="top_func">
        <ul >
          <li><span><a href="#">首页</a></span></li>
          <li><a href="#">学长讲堂</a></li>
          <li><a href="#">实验室推文</a></li>
          <li><a href="#">组队</a></li>
        </ul>
      </div>
    </div>
  )
}

function Leftfunction() {
  return (
    <div className="left_func">
      <ul style={{ padding: "0" }}>
        <li><a href="#">消息通知</a></li>
        <li><a href="#">资料编辑</a></li>
        <li><a href="#">密码修改</a></li>
        <li><a href="#">个性设置</a></li>
        <li><a href="#">退出登录</a></li>
      </ul>
    </div>
  )
}