
import React, { Component } from "react";
import IdeaItem from "./IdeaItem";


class IdeaList extends Component {
    // static propTypes = {
    //     comments: PropTypes.array.isRequired,
    //     deleteComment: PropTypes.func.isRequired
    // }
    render(){
        const {comments,deleteComment} = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="list-item">
                <h5 style={{display}}>暂无点子</h5>
               <ul>{
                    comments.map((comment,index)=> <li key={index}><IdeaItem
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
export default IdeaList