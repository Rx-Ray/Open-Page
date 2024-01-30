import "./announces.css"
import { List, Avatar } from "antd"
import { Carousel } from "element-react"
import pic1 from "./img/1.png"
import pic2 from "./img/2.png"
import pic3 from "./img/3.png"
import pic4 from "./img/4.jpg"


export default function Announces(){
    return (
        <div className="announces">
            <AnnouncesLeft/>
            <AnnouncesRight/>
        </div>
    )
}

function AnnouncesLeft(){
    return <div className="announces-left">
        <FuncArea/>
    </div>
}

function AnnouncesRight(){
    return <div className="announces-right">
        <Announcement/>
        <AnnounceList/>
    </div>
}

function FuncArea(){
    return <div className="func-area">
        <h3>功能分类A</h3>
        <div className="func-list">
            <div></div>
            <div></div>
        </div>
        <h3>功能分类B</h3>
        <div className="func-list">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h3>功能分类C</h3>
        <div className="func-list">
            <div></div>
        </div>
    </div>
}

function Announcement(){
    return <div style={{position:"relative", width:"528px"}}>
        <Carousel interval="5000" arrow="never" indicatorPosition="outside" trigger="click">
        {
          [pic1,pic2,pic3,pic4].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item} alt="" width="100%"/>
              </Carousel.Item>
            )
          })
        }
        </Carousel>
      </div>
}

function AnnounceList(){
    const data = [{title:"AABB",description:"ccdd"},{},{}];

    return <div>
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">AABB</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
    />
    </div>
}