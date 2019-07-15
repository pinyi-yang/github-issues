import React from 'react';
import axios from 'axios';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  postNewComment = (e) => {
    e.preventDefault();
    let body = this.state.body;
    let url = 'https://api.github.com/repos/facebook/react/issues/' + this.props.match.params.issueNumber +'/comments';
    axios.post(url, {
      body
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className='showissuesingle'>
      <div className='showissueavatar'>
        <img src='/img/50342357.png' alt='avatar' />
      </div>
      <div className='shownewcommentform'>
        <form onSubmit={this.postNewComment}>
          <textarea onChange={this.handleChange} value={this.state.body} placeholder='Leave a comment'></textarea>
          <input type='submit' value='Comment' />
        </form>
      </div>
    </div>
    );
  }
}

export default NewComment;