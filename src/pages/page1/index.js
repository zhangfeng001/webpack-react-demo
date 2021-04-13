import React from 'react'

class Page1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is page1'
        }
    }
    render(){
        return(
            <div>{this.state.content}</div>
        )
    }
} 
export default Page1;