import React from 'react';
import { Route,HashRouter, Link} from 'react-router-dom';

import Page1 from './page1/index'
import Page2 from './page2/index'

class Home extends React.Component{
	render(){
		return(
			<div>
				<div>This is Home!</div>
                <HashRouter>
					<Link to='/page1'>go page1</Link>
					<Link to='/page2'>go page2</Link>
                    <Route path="/page1" Component={Page1} >go page1</Route>
                    <Route path="/page2" Component={Page1} >go page2</Route>
                </HashRouter>
			</div>
		);
	}
}
 
export default Home;