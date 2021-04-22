import React from 'react'
import AppList from './AppList'
import AppForm from './AppForm'
import AppFooter from './AppFooter'

var styles = {
    'title': {
        margin:'10px 0 10px 0'
    },
    'center':{
        textAlign:'center'
    }
}
class TodoListIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            choosevalue : 1, // 1全选 2未完成 3已完成
            data: this.props.data // 数据源头在这里
        }
    }
    OnAddTodoItem (newItem) { // AppForm 添加数据
        let newdata = this.state.data.concat(newItem);
        this.setState({data : newdata});
        console.log('添加数据',this.state.data)
    }
    ChooseValue (id) { // AppFooter 修改状态
        this.setState({choosevalue:id});
        console.log('修改了',this.state.choosevalue)
    }
    render() {
        const { data,choosevalue } = this.state; 
        return (
        <div style={styles.center}>
            <h1 style={styles.title}>My Todo with React</h1>
            <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
            <AppList data={data} choosevalue={choosevalue} />
            <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>
        </div>
        )
    }
  }
   
  export default TodoListIndex;