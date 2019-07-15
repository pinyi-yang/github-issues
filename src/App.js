import React from 'react';
import './App.css';
import Header from './Header';
import Issues from './Issues.jsx';
import Show from './Show';
import Home from './Home';
import moment from 'moment';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openIssues: [],
      closeIssues: []
    }
  }

  componentDidMount() {
    axios.all( [getOpenIssues(), getCloseIssues()] )
    .then(axios.spread((openIssues, closeIssues) => {
      this.setState({
        openIssues: openIssues.data,
        closeIssues: closeIssues.data
      });
    }));
  }


  render() {
    return (
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/issues' render={() => <Issues openIssues={this.state.openIssues} closeIssues={this.state.closeIssues}/> } />
          <Route path='/issues/:number' render={(props) => <Show {...props} issues={this.state.openIssues.concat(this.state.closeIssues)} /> } />
        </div>
      </Router>
    );
  }
}

function getOpenIssues() {
  return axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100');
}

function getCloseIssues() {
  return axios.get('https://api.github.com/repos/facebook/react/issues?state=closed&page=1&per_page=100');
}

export default App;
