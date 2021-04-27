import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    componentDidMount(){
    }
    render() {
      return (
        <div>
            <Switch>
                {
                    this.props.childen.map((route,key)=>{
                        if (route.redirect){
                        return <Route key={key} exact={!route.childen} path={route.path} render={()=>(
                            <Redirect to={route.redirect}/>
                        )}/>
                        }else {
                        return <Route key={key} exact={!route.childen} path={route.path} render={props=>(
                            <route.component {...props} childen={route.childen}/>
                        )}/>
                        }
                    })
                }
            </Switch>
        </div>
      );
    }
  }
   
  export default Hello;