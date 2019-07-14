import React from 'react';

const PageBar = (props) => {
  let buttons=[];
  for (let i = 1; i <=5; i++ ) {
    buttons.push(
      i === props.pageNum ? 
        <button className='currentpage' value={i} onClick={props.goToPage}>{i}</button>
      : <button value={i} onClick={props.goToPage}>{i}</button>
    )
  }
  
  return (
  <div className='pagebar'>
    <button value={props.pageNum===1? 1:props.pageNum-1} onClick={props.goToPage}>＜</button>
    {buttons}
    <button value={props.pageNum===5? 5:props.pageNum+1} onClick={props.goToPage}>＞</button>
  </div>

  );
}


export default PageBar;