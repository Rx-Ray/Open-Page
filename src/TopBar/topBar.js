import "./bar.css"

export function TopBar() {
    function LogOut(){
        window.location.href="/login";
    }

    return <div className='top-bar'>
        <div className='left-function'><button onClick={LogOut}>登出</button></div>
    </div>
}