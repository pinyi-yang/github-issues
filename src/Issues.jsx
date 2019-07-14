import React from 'react';
import moment from 'moment';
import IssuesList from './IssuesList';
import PageBar from './PageBar';

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      page: 1
    }
  }

  selectOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  selectClosed = () => {
    this.setState({
      isOpen: false
    })
  }

  goToPage = (e) => {
    this.setState({
      page: parseInt(e.target.value)
    })
  }

  render() {
    let issuesList;
    let startissue = (this.state.page - 1 ) * 20;
    let endissue = this.state.page * 20;

    if (this.state.isOpen) {
      issuesList = (
        <>
          <p>This is open issues list</p>
          <IssuesList issues={this.props.openIssues.slice(startissue, endissue)} />
        </>
      )
    } else {
      issuesList = (
        <>
          <p>This is closed issues list</p>
          <IssuesList issues={this.props.closeIssues.slice(startissue, endissue)} />
        </>
      )
    }

    return (
      <>
        <p>this is issues</p>
        <div className='notes'>
          <h3>👋 Want to submit an issue to bookface/actre</h3>
          <p>If you have a bug or an idea, read the contriubting guidelines before opening an issue.</p>
          <p>Issues labeled good first issue can be good first contributions.</p>
        </div>

        <div className='issuesListContainer'>
          <button onClick={this.selectOpen}>! Open</button> <button onClick={this.selectClosed}>✓ Closed</button>
          {issuesList}
        </div>

        <PageBar goToPage ={this.goToPage} pageNum={this.state.page} />
      </>

    );
  }
}


export default Issues;