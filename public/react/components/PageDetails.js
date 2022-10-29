import React from 'react';

export const PageDetails = (props) => {

    return (
        <>
            <h1>{props.page.title}</h1>
            <p><strong>{props.page.author}</strong></p>
            <br />
            <h3>{props.page.content}</h3>
            <h3>{props.page.tags}</h3>
        </>
    )
}