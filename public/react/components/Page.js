import React from 'react';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const Page = (props) => {

  // console.log("URL: ", `${apiURL}/wiki/${props.page.slug}`)

  
  

  let handleClick = async () => {
      let pageData = await fetch(`${apiURL}/wiki/${props.page.slug}`);

      console.log("THE PAGE DATA: ", pageData)

      console.log(props.page);

      console.log("The title: " , props.page.title);
    console.log("The author: ", props.page.authorId);
    console.log("Created At: ", props.page.createdAt);
    console.log("Page Content: ", props.page.content);
    console.log("Page Tags: ", props.page.tags);

      let page = pageData.json();
      props.setSelectedPage(page);
  }

  return <>
    <h3 onClick={() => handleClick()}>{props.page.title}</h3>
    {/* <h4>{props.page.content}</h4>
    <br /> */}
  </>
} 
	