import React from 'react'
import { Button } from 'antd';
var styles = {
  'content':{
    margin:'10px'
  },
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative'
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppTodos extends React.Component {
  render () {
    return (
      <div style={styles.content}>
        <span style={styles.title} >
          {this.props.text}
        </span>
        <span style={styles.title}>
          {this.props.complete ? '已完成' : '未完成'}
        </span>
        <span style={styles.title}>{this.props.id}</span>
        {/* <Button type="primary">
            删除
        </Button>  */}
      </div>
    )
  }
}

export default AppTodos;