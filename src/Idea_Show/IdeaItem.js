import React, { Component , useState} from "react";
import avatar from 'C:/Users/33566/my-app/src/images/avatar.png'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import ChangeTab from './ChangeTab'



class Return_comments extends React.Component {

    // 依赖的数据
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
  
      {
        id: 1,
        name: '时间',
        type: 'time'
      }
    ],
    comments: [//这只是例子
    {
        id:1,
        author:"小鳄鱼",
        comment:"福利活动yyds",
        time:new Date('2021-10-10 09:09:00')
    }
      
    ]
  }
    addComment = (comment) => {
      // 将添加的评论追加到评论list上
      const {comments} = this.state
      comments.unshift(comment)
      // 更新状态
      this.setState({comments})
    }
  
    deleteComment = (index) => {
      const {comments} = this.state
      comments.splice(index,1)
      this.setState({comments})
    }
    // 提供回调函数
    changeCommentsSort = (newMsg) => {
        this.setState({comments:newMsg})
    }
    
    render(){
      return (
        <div className="App">
          <div>
          <div className="comment-container">
            <div className="comment-head">
            </div>
            <div className="tabs-order"> 
              <ChangeTab changeMsg={this.changeCommentsSort} comments={this.state.comments}/>
            </div>
            <div>
            <CommentAdd addComment={this.addComment} />
            </div>
            <div className="comment-list">
              <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
            </div>
          </div> 
        </div>
        </div>
      )}
  }



function Comment(){
    const [isShow, setisShow] = useState(false)
    const check = () => {
      setisShow(!isShow)
    }
    return(
        <div>
        {isShow ? <Return_comments/> : " "}
        <button onClick={() => check()}>点击进行友好交流</button>
      </div>
    )
}

class IdeaItem extends Component {
    constructor(){
        super()
        this.state={
            isLiked:false
        }
    }
    handleLike(){
        this.setState((prevState)=>{
            console.log(prevState)
            return{
                isLiked:!prevState.isLiked
            }
        },()=>{
            console.log(this.state.isLiked) //setState回调 获取最新的状态
        })
    }
    render() {
        const { comment } = this.props
        return (
            <div className="list-item">
              <div className="user-face">
                <img className="user-head" src={avatar} alt="" />
              </div>
              <div className="comment" >
                <div className="user">{comment.author}</div>
                <p className="text">{comment.comment}</p>
                <div className="info">
                  <span className="time">{comment.time.toLocaleString().replaceAll('/','-').replace('上午','').replace('下午','')}</span>
                  <span onClick={this.handleLike.bind(this)}>
                    {
                    this.state.isLiked ? '已赞💓' :'点赞🤍'
                    }
                </span>
                
                  <span className="reply btn-hover" onClick={this.handleDeleteComment}>删除</span>
                  <span className="like liked">
                <Comment/></span>
                </div>
              </div>
            </div>
        )
    }
}
export default IdeaItem