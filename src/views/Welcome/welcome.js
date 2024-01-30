import "./welcome.css"
import cloud from "./img/cloud.png"
import back from "./img/backs.png"
import { Button } from "element-react"

export default function Welcome(){

    return (
        <div className="welcome">
            <img src={back} alt="" class="back-img"/>
            <div className="text">
                <p className="Cn_Welcome">欢迎来到</p>
                <p className="En_Welcome">Welcome to</p>
                <p className="Cn_OpenLab">兴趣开放实验室</p>
                <p className="En_OpenLab">OpenLab</p>
                <Button style={{marginTop:"20px"}}>加入我们</Button>
            </div>
        </div>
    )
}