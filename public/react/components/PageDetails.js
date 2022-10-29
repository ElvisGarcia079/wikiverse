import React from 'react';

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

    return (
        <>
            
        </>
    )
}