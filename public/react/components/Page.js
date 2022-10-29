import React from 'react';

export const Page = (props) => {

  let handleClick = () => {
    console.log(props.page);
    // console.log(props.page.authorId);
    props.setSelectedPage(props.page);
  }

  return <>
    <h3 onClick={() => handleClick()}>{props.page.title}</h3>
    {/* <h4>{props.page.content}</h4>
    <br /> */}
  </>
} 
	