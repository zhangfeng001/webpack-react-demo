import React from 'react'

class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is list page'
        }
    }
    render(){
        return(
            <div>{this.state.content}</div>
        )
    }
} 
export default List;