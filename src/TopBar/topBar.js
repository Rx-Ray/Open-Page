import "./css/topbar.css"
import "./css/dropdown.css"
import logo from "./img/logos/logo-l2.png"
import header from "./img/header/header.png"

export function TopBar() {
    function LogOut(){
        window.location.href="/login";
    }

    function UserDropdown() {
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

    return <div className='top-bar'>
        <div className="left-element" style={{width:"15%", height:"10px"}}></div>
        <div className="left-element" style={{marginLeft:"10px"}}><img src={logo} height="60px" alt=""/></div>
        <div className="right-function" style={{width:"15%", height:"10px"}}></div>
        {UserDropdown()}
        {/* <div className='right-function'><button onClick={LogOut}>退出</button></div> */}
    </div>
}