import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import NavBar from './Navbar';

class App extends Component{
  render(){
    return(
      <Router>
			<div className="container">
				<div className="row">
					<Route path="/" component={NavBar} />
            		<Route exact path="/" component={Home} />
					<Route path="/movie/:movieId" component={SingleMovie} />
					{/* <Route path="/search/:searchTerm" component={SearchPage} /> */}
				</div>
			</div>
        </Router>
      
    )
  }
}

export default App;
