import "./xzjt.css"
import "./xzjt.js"
export default function Course(){
    return(
        <div className="course">
          <div id="title" class="mytitle">
            <p style={{marginTop:"4vw"}}>学长讲堂</p>
          </div>
            
          <nav>
            <a href="https://www.cs.sdu.edu.cn/info/1055/4676.htm">学长讲堂 | 第一期 主讲人：2005级校友北京理工大学沈蒙副教授</a>
            <a href="https://www.qdxq.sdu.edu.cn/info/1015/23605.htm">学长讲堂 | 第二期 主讲人：1996级校友北京大学王腾蛟教授</a>
            <a href="https://www.cs.sdu.edu.cn/info/1055/4735.htm">学长讲堂 | 第三期 主讲人：2001级校友中国国际商会产业供应链委员会张明钟副秘书长</a>
            <a href="https://www.cs.sdu.edu.cn/info/1055/4844.htm">学长讲堂 | 第四期 主讲人：2000级校友南洋科技创业中心中国区主任葛蒙</a>
            <a href="https://mp.weixin.qq.com/s/BC5OFCVKgKavQrk9M_Wxpw">学长讲堂 | 第九期 主讲人：2015级校友巴比特公司首席研究员刘秋杉</a>
            <a href="https://mp.weixin.qq.com/s/q8V1zMHKgssY_whnZFNGyQ">学长讲堂 | 第十期 主讲人：2005级校友百度研究院研究员周景博</a>
            <a href="https://www.cs.sdu.edu.cn/info/1055/5815.htm">学长讲堂 | 第十三期 主讲人：2013级校友点猫科技创始人兼CEO李天驰</a>
            <a href="https://www.cs.sdu.edu.cn/info/1055/5832.htm">学长讲堂 | 第十四期 主讲人：2006级中国科学院信息工程研究所研究员曹亚男</a>
          </nav>
            
          <section>
            <div class="image-module">
              <img src="./img/1.png" alt="加载错误"/>
              <img src="./img/2.png" alt="加载错误"/>
              <img src="./img/3.png" alt="加载错误"/>
              <img src="./img/14.png" alt="加载错误"/>
            </div>
            <div id="botton">
                <button id="prev-button">上一页</button>
                <button id="next-button">下一页</button>
            </div>
          </section>
        </div>
    )
}