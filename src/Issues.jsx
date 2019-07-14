import React from 'react';
import moment from 'moment';
import IssuesList from './IssuesList';
import PageBar from './PageBar';

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      page: 1,
      sortBy: 'id',
      reverse: true
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

  setSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === this.state.sortBy) {
      this.setState({
        reverse: !this.state.reverse
      })
    } else {
      this.setState({
        sortBy: e.target.value,
        reverse: true
      })
    }
  }

  render() {
    let issuesList;
    let issuesListCom;
    let startissue = (this.state.page - 1 ) * 20;
    let endissue = this.state.page * 20;
    console.log(this.state['page']);

    this.state.isOpen ? issuesList = this.props.openIssues: issuesList = this.props.closeIssues;
    issuesList = mergeSort(this.props.openIssues, this.state.sortBy);
    if (this.state.reverse) {
      issuesList.reverse();
    }

    if (this.state.isOpen) {
      issuesListCom = (
        <>
          <p>This is open issues list</p>
          <IssuesList issues={issuesList.slice(startissue, endissue)} />
        </>
      )
    } else {
      issuesListCom = (
        <>
          <p>This is closed issues list</p>
          <IssuesList issues={issuesList.slice(startissue, endissue)} />
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
          <button onClick={this.selectOpen}>! Open</button> 
          <button onClick={this.selectClosed}>✓ Closed</button>
          <button onClick={this.setSort} value='id'>Sort by Date {this.state.sortBy==='id' ? ((this.state.reverse)? '▽':'△') : ''}</button>
          <button onClick={this.setSort} value='comments'>Sort by Comments {this.state.sortBy==='comments' ? ((this.state.reverse)? '▽':'△') : ''}</button>
          {issuesListCom}
        </div>

        <PageBar goToPage ={this.goToPage} pageNum={this.state.page} />
      </>

    );
  }
}

function mergeSort(array, attribute) {
  if (array.length === 0 ) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  if (array.length === 2) {
    if (array[0][attribute] > array[1][attribute]) {
      return [array[1], array[0]]
    } else {
      return array;
    }
  }

  let pivotIndex = Math.round((array.length)/2 - 1);
  let pivot = array[pivotIndex];
  let left = [];
  let right = [];

  array.forEach((item, i) => {
    if (i !== pivotIndex) {

      item[attribute] < pivot[attribute]? left.push(item):right.push(item); 
    }
  })

  return [].concat(mergeSort(left, attribute), [pivot], mergeSort(right, attribute));
}

export default Issues;