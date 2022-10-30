import React, { useState, useEffect } from 'react';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const AddPages = (props) => {
    // These are the states that we need to create for our Adding Pages. 

    // Since we are going to have to track the value of data for our article, we will set a state for each field of the article we need. 

    // 1. The title. 
        // Initial State is an Empty String. 
        // We expect the title to be a String
    const [title, setTitle] = useState('');

    // 2. The content
        // Initial State is an Empty String.
        // We expect the content to be a String
    const [content, setContent] = useState('');

    // 3. The author
        // Initial State is an Empty String.
        // We expect the content to be a String 
    const [authorName, setAuthorName] = useState('');

    // 4. The author email
        // Initial State is an Empty String.
        // We expect the content to be a String
    const [authorEmail, setAuthorEmail] = useState('');

    // 5. The tags
        // Initial State is an Empty String.
        // We expect the content to be a String
    const [tags, setTags] = useState('');

    // We are now going to have to define the submit handler function. 
    const response = await fetch(`${apiURL}/wiki`, {
        // Method: This is the type of action we are taking. Creating.
        method: "POST",
        // Headers: This indicates the data type this data is contained in.
        headers: {
          'Content-Type': 'application/json'
        },
        // Body: This is the model for how to JSON data is coming in.
        body: JSON.stringify({
            // These are the fields of the article that we need
          title,
          content,
          name: authorName,
          email: authorEmail,
          tags,
        })
      });

      // Parse the data we are sending out. 
      const data = await response.json();
      if(data) {
          // This is going to add the new page to the current list of pages. 
        setPages([...pages, data]);
           // This is going to load the main page back essentially.
        setIsAddingPage(false);
      }

    // The best way to capture user data is with a Form. So we will work with React Forms. 

    // The idea with React Forms is that we use a "submit" handler through an event listener. 
    return (
        <>
        {/* Creating a Form for Gathering the Necessary Data for creating this article */}
            <form action="submit">
                <input type="text" value={"Enter Article Title"}/>
                <input type="text" value={"Enter the Author Name"}/>
                <input type="text" value={"Enter the Content"}/>
                <input type="text" value={"Enter the Tags"}/>
                <button onSubmit={() => handleSubmit()}>Submit Article</button>
            </form>
        </>
    )
}