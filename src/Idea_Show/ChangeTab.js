import React from 'react'
import PropTypes from 'prop-types'//虽然好像没什么用，但部分功能必须有此插件

// 切换tab 组件，尽管只支持时间排序
class ChangeTab extends React.Component {
   state = {
     menuNum: 1
   }
   clickSortHandler = (num) => {
        const {comments}  = this.props
        if(num === 1)  {
            comments.sort(this.compare('time',false))
            // ② 调用父组件传过来的回调函数，并注入参数（子传父）
            this.props.changeMsg(comments)
        }
        this.setState({
           menuNum: num
        })
   }        
    // 按某个字段进行排序
    compare(prop,desc){
        return function(a,b){
            var value1 = a[prop]
            var value2 = b[prop]
            // 正序
            if(desc == true){
                return value1 - value2
            }
            // 倒序
            else {
                return value2 - value1
            }
        }
    }    
   render(){
     return (
       <ul className="sort-container">
         <li className={this.state.menuNum === 2 ? 'on' : ''} onClick={()=> this.clickSortHandler(2)}>按时间排序</li>
       </ul>
     )
   }
 }
 export default ChangeTab