import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {
  render () { 
    var value = this.props.choosevalue;
    const a = this.props.data.map(({ id, text, complete }, index) => {
      if (value == 1) { // q全部
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete} 
          />
         )
      }
      if (value == 2 && complete === false) { // 已完成
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete} 
          />
         )
      }
      if (value == 3 && complete === true) { // 未完成
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete} 
          />
         )
      }
    })
    return (
      <div> { a } </div>
    )
  }
}

export default AppList;