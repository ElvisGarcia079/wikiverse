import React from 'react';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const PageDetails = ({page, pages, setSelectedPage, setPages}) => {

    // Unpacking the fields that are available from the selectedPage/Page Property
        // This saves us from having to say "page.title", "page.author" etc.
        // The selected page object was nested in the props object so we essentially deconstructed it twice. 
        // If not, we would have had to do "props.page.title", "props.page.author" etc.
    const {
        title,
        author,
        createdAt,
        content,
        tags
    } = page;

    // console.log("The title: " , title);
    // console.log("The author: ", author);
    // console.log("Created At: ", createdAt);
    // console.log("Page Content: ", content);
    // console.log("Page Tags: ", tags);


    return (
        <>
            <h1>Check Your Developer Tools Console Dashboard!</h1>
        </>
    )
}