import "./css/topbar.css"
import "./css/dropdown.css"
import logo from "./img/logos/logo-l3.png"
import header from "./img/header/header.png"
import mheader from "./img/header/mheader.png"
import fheader from "./img/header/fheader.png"


export function TopBar() {
    function LogOut(){
        window.location.href="/login";
    }

    function UserDropdown(){
        return NoInfo();
    }

    function NoInfo() {
        return <div className="right-function">
            <img src={header} alt="" className="dropdown-btn"/>
            <div className="dropdown-content">
                <ul>
                    <li className="gap">尚未登录</li>
                    <li onClick={LogOut}>登录</li>
                    <li>注册</li>
                </ul>
            </div>
        </div>
    }

    function Male() {
        return <div className="right-function">
            <img src={mheader} alt="" className="dropdown-btn"/>
            <div className="dropdown-content">
                <ul>
                    <li className="gap">路人甲</li>
                    <li onClick={LogOut}>个人主页</li>
                    <li>退出账号</li>
                </ul>
            </div>
        </div>
    }

    function Female() {
        return <div className="right-function">
            <img src={fheader} alt="" className="dropdown-btn"/>
            <div className="dropdown-content">
                <ul>
                    <li className="gap">路人乙</li>
                    <li onClick={LogOut}>个人主页</li>
                    <li>退出账号</li>
                </ul>
            </div>
        </div>
    }

    return <div className='top-bar'>
        <div className="left-element" style={{width:"15%", height:"10px"}}></div>
        <div className="left-element" style={{marginLeft:"10px"}}><img src={logo} height="60px" alt=""/></div>
        <div className="right-function" style={{width:"15%", height:"10px"}}></div>
        {UserDropdown()}
        {/* <div className='right-function'><button onClick={LogOut}>退出</button></div> */}
    </div>
}