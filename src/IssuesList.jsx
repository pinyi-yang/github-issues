import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

const IssuesList = (props) => {

  return (
    props.issues.map(issue => (
      <div className='issueslistitem'>
        <div className='item'>
          <b>! <Link to={'/issues/' + issue.id} className='bodylink'>{issue.title}</Link> </b> <br/>
          {issue.closed_at ? 
              <small>#{issue.id} by {issue.user.login} was closed {moment(issue.closed_at).fromNow()}  </small> 
            : <small>#{issue.id} opened {moment(issue.created_at).fromNow()} by {issue.user.login} </small>}
        </div>
  
        <div className='commentcount'>
          🗒 {issue.comments}
        </div>
      </div>
    ))
  );
}

export default IssuesList;