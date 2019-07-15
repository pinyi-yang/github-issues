import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const Comments = (props) => (
  props.comments.map((comment, i) => (
    <div className='showissuesingle'>
      <div className='showissueavatar'>
        <img src={comment.user.avatar_url} alt='avatar' />
      </div>
      <div className='showissuebody'>
        <b>{comment.user.login}</b> commented {moment(comment.created_at).fromNow()}
        <ReactMarkdown source={comment.body} className='markdown'/>
      </div>
    </div>
  ))
)

export default Comments;