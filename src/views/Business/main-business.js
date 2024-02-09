import '.body.css'
import '.bootstrap.css'
import Picture1 from './blog-post-01.jpg'
import Picture2 from './blog-post-02.jpg'
import Picture3 from './blog-post-03.jpg'
import Picture4 from './blog-post-04.jpg'


function Head() {
    return(
        <div class="col-lg-4 offset-lg-4 wow fadelnDown">
            <div class="section-heading">
                <h6>OPENLAB</h6>
                <h4 id="i9qsdj" class="c1336">
                    <em>实验室主营业务</em>
                </h4>
                <div class="line-dec"></div>
            </div>
        </div>
    );
}

function Left() {
    return(
        <>
  <div className="col-lg-6 show-up wow fadeInUp">
    <div className="blog-post">
      <div className="thumb">
        <img src={Picture1} alt=" "/>
      </div>
      <div className="down-content">
        <h4>实验室分享及周会</h4>
        <p>
          实验室内部定期举办分享会及周会，由优秀的学长学姐精心组织，带你不断了解前沿的应用技术(Web/Android/游戏开发等)。
          公开举办的兴趣引导课，由腾讯、字节跳动等公司的技术骨干及知名校友们亲临指导。
        </p>
      </div>
    </div>
  </div>
</>
    );
}

function Righta(){
    return(
        <div class="col-lg-12">
            <div class="post-item">
                <div class="thumb">
                    <img src={Picture2}alt=""/>
                </div>
                <div class="right-content">
                    <h4>交流培训</h4>
                    <p>全国大学生软件创新大赛交流培训会，由前比赛获奖的成员们传授独家秘笈。</p>
                </div>
            </div>
        </div>
    );
}

function Rightb(){
    return(
        <div class="col-lg-12">
            <div class="post-item">
                <div class="thumb">
                    <img src={Picture3}alt=""/>
                </div>
                <div class="right-content">
                    <h4>黑客马拉松</h4>
                    <p>每年11月举办的“山东大学黑客马拉松”编程挑战赛，展现技术实力和团队配合。</p>
                </div>
            </div>
        
        </div>
    );
}

function Rightc(){
    return(
        <div class="col-lg-12">
            <div class="post-item last-post-item">
                <div class="thumb">
                    <img src={Picture4}alt=""/>
                </div>
                <div class="right-content">
                    <h4>项目承接</h4>
                    <p>承接学院组织的创新实践项目评审，由专家教授进行项目评比。</p>
                </div>
            </div>
        </div>
    );
}

function Right(){
    return(
       <div class="col-lg-6 show-up wow fadeInUp">
            <div class="row">
            <Righta />
            <Rightb />
            <Rightc />
            </div>
        </div> 
    );
    
}

export default function Business(){
    return(

        <div id="blog" class="blog">
            <div class="container">
                <div class="row">
                <Head />
                <Left />
                <Right />
                </div>
            </div>
        </div>  
    );
}