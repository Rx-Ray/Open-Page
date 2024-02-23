import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import avatar from 'C:/Users/33566/my-app/src/images/avatar.png'
import { createRef } from 'react'
import {v4 as uuid} from 'uuid'

// 添加或删除评论 组件 
class IdeaAdd extends React.Component {
    // 给组件对象指定state属性
    // 初始化状态
    constructor(props){
        super(props)
        this.state = {
            username: '游客 第' + uuid() + '号',
            content: '',
            myDiv: createRef()
          }
    }

    handleSubmit = () => {
        const comment = {
            author: this.state.username,
            comment: this.state.myDiv.current.value,
            time: new Date(),
            attitude: 0
        }
        if(comment.comment != ''){
            this.setState({username:  + uuid() + '号'}) // 得到一个独一无二的uuid})
            // 添加评论 
            this.props.addComment(comment)
            // 清空输入数据
            this.setState({author: ''})
            this.state.myDiv.current.value = ''
        } else {
            alert('评论内容不能为空！')
        }
    }
   
    render(){
      const {comments} = this.state
      return (
        <div className="comment-send">
          <div className="user-face">
            <img className="user-head" src={avatar} alt="" />
          </div>
          <div className="textarea-container">
            <textarea
              cols="80"
              rows="5"
              placeholder="舒发奇思妙想(简略写出名称与方向）"
              className="ipt-txt"
              ref={this.state.myDiv}
            />
            <button className="comment-submit" onClick={this.handleSubmit}>发表idea</button>
          </div>
          <div className="comment-emoji">
            <i className="face"></i>
            <span className="text">表情</span>
          </div>
      </div>
      )
    }
  }
  export default IdeaAdd