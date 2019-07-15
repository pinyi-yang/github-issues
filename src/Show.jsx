import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';


class Show extends React.Component {

  render() {

    var issue = this.props.issues.find((item) => item.number === parseInt(this.props.match.params.number))
    return (
    <div className='showdiv'>
      <p>this is Issue {this.props.match.params.number} </p>
      <div className='showtitle'>
        <h2>{issue.title} <span>#{issue.number}</span></h2>
      </div>
  
      <div className='info'>
        <div className='opentag'>! Open</div>
        <p><b>{issue.user.login}</b> opend this issue {moment(issue.created_at).fromNow()} • {issue.comments} comments </p>
      </div>
  
      <div className='showissuediv'>
        <div className='showissuecontent'>
          <div className='showissueavatar'>
            <img src={issue.user.avatar_url} alt='avatar' />
          </div>
          <div className='showissuebody'>
            <b>{issue.user.login}</b> commented {moment(issue.created_at).fromNow()}
            <ReactMarkdown source={issue.body} className='markdown'/>
          </div>
          
        </div>
  
        <div className='showissuesidebar'>
          <b>Assignees</b>
          <p>No one assigned</p>
          <hr />
          <b>Labels</b>
          <div className='labels'>
            developing       
          </div> 
        </div>
  
      </div>
    </div>
    );
  }
}


export default Show;