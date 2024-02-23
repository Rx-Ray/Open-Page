import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import CommentItem from './CommentItem'
import ChangeTab from './ChangeTab'
import IdeaItem from './IdeaItem'
import IdeaList from './IdeaList'
import IdeaAdd from './IdeaAdd'


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
          {/* 评论数 */}
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



class Return_idea extends React.Component {

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
    comment:"福利活动",
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
          <IdeaAdd addComment={this.addComment} />
          </div>
          <div className="comment-list">
            <IdeaList comments={this.state.comments} deleteComment={this.deleteComment} />
          </div>
        </div> 
      </div>
      </div>)
  }
}


function Comment(){
    const [isShow, setisShow] = useState(false)
    const check = () => {
      setisShow(!isShow)
    }
    return(
        <div>
        <button className="like liked" onClick={() => check()}>点击进行友好交流</button>
        
       {isShow ? <Return_comments/> : " "}
      </div>
    )
}



export default Return_idea





  