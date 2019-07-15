import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

const IssuesList = (props) => {

  return (
    props.issues.map(issue => (
      <div className='issueslistitem'>
        <div className='item'>
          <div className='itemhead'>
            <b>
              {issue.closed_at ? '✓' : '!'} 
              <Link to={'/issues/' + issue.number} className='bodylink'>{issue.title}</Link> 
            </b> 
            {props.sortBy === 'comments'? 
              issue.labels.map(label => (
                <span className='label' style={{ backgroundColor: `#${label.color}` }}>{label.name}</span>
              ))
            : ''}
          </div><br />
          {issue.closed_at ? 
              <small>#{issue.number} by {issue.user.login} was closed {moment(issue.closed_at).fromNow()}  </small> 
            : <small>#{issue.number} opened {moment(issue.created_at).fromNow()} by {issue.user.login} </small>}
        </div>
  
        <div className='commentcount'>
          🗒 {issue.comments}
        </div>
      </div>
    ))
  );
}

export default IssuesList;