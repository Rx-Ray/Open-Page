import React, { Component } from "react";
import PropTypes from 'prop-types'
import avatar from 'C:/Users/33566/my-app/src/images/avatar.png'



class CommentItem extends Component {
    handleDeleteComment = () => {
        const { comment, deleteComment, index } = this.props
        if (window.confirm(`确定删除${comment.author}的这条评论嘛？`)) {
            deleteComment(index)
        }
    }
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
                </div>
              </div>
            </div>
        )
    }
}
export default CommentItem