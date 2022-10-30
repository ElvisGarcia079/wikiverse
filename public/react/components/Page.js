import React from 'react';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const Page = (props) => {
  
  let getPage = async () => {
      let pageData = await fetch(`${apiURL}/wiki/${props.page.slug}`);
      let page = await pageData.json();

     props.setSelectedPage(page);
  }

  return <>
    <h3 onClick={() => getPage()}>{props.page.title}</h3>
    {/* <h4>{props.page.content}</h4>
    <br /> */}
  </>
} 
	