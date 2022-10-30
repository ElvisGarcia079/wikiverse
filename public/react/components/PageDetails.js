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

    console.log("The page after the deconstructing: \n", tags)


    return (
        <>
            {/* <h1>Check Your Developer Tools Console Dashboard!</h1> */}
            <h1>Page Details!</h1>
            <br />
            <h3><strong>Title: </strong> {title}</h3>
            <h3><strong>Author: </strong>{author.name}</h3>
            <br />
            <h3><strong>Content: </strong>{content}</h3>
            {/* <h3><strong>Created At: </strong> {createdAt}</h3> */}
            <br />
            <h3><strong>Tags: </strong> {tags.map((tag, id) => <p key={id}> {id+1}: {tag.name}</p>)}</h3>

        </>
    )
}