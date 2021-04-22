import React, { Component } from 'react'
import Ind from './compon'
class todoList extends Component {
    constructor(props){
      super(props);
    }
    render() {
        let data = [
            {id: 0, text: '天气不错哦!!!', complete: false},
            {id: 1, text: '天气不错哦!!!', complete: false},
            {id: 2, text: '出去玩啊!!!', complete: true},
        ]
      return (
          <Ind data={data} />
      );
    }
  }
   
  export default todoList;