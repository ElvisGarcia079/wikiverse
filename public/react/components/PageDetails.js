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

    // Since we are going to have to handle the event, let's create a function to delete the page. 
    // Since this will trigger a database and fetch call, we will need to async
    let deletePage = async (slug) => {

        // We should fetch the page we want to delete, aka this one.
        let pageData = await fetch(`${apiURL}/wiki/${slug}`, {
            // This is where we specify the action we want our server to take on this route.
            method: "DELETE",
        });

        let page = await pageData.json();

        // We now have to specify that we would like to load all of the pages, minus the one that just got deleted...

        setSelectedPage(null);
        setPages(pages.filter((page) => page.slug !== slug));



        

    }


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
            <h3> Created At: </h3>
            <br />
            <h3><strong>Tags: </strong> {tags.map((tag, id) => <p key={id}> {id+1}: {tag.name}</p>)}</h3>
            <br />

            <button onClick={() => setSelectedPage(null)}>Back to Wiki!</button>
            <button onClick={() => deletePage(page.slug)}>Delete this Page</button>

        </>
    )
}