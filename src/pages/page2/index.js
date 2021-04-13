import React from 'react'

class Page2 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is page2'
        }
    }
    render(){
        return(
            <div>{this.state.content}</div>
        )
    }
} 
export default Page2;