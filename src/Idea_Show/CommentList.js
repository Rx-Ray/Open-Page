import React, { Component } from "react";
import CommentItem from './CommentItem'
import PropTypes from 'prop-types'

class CommentList extends Component {
    // static propTypes = {
    //     comments: PropTypes.array.isRequired,
    //     deleteComment: PropTypes.func.isRequired
    // }
    render(){
        const {comments,deleteComment} = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="list-item">
                <h5 style={{display}}>暂无评论，点击添加评论！</h5>
               <ul>{
                    comments.map((comment,index)=> <li key={index}><CommentItem
                                                        comment={comment} 
                                                        index={index} 
                                                        deleteComment={deleteComment} />
                                                </li>) 
                    } 
                </ul>
            </div>
        )
    }
}
export default CommentList