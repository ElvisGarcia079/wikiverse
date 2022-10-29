import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// This state is used to store the value of the current page. Initially this value starts as an empty array. The useEffect hook instantly loads values into this array upon initial loading.
	const [pages, setPages] = useState([]);

	// 1. We are going to have to create a new state for keeping track of the article that is fetched from the database based on it's "slug" value. 

	// 2. The initial value of this state will be "null". That's because what we get back from the Database is an Object, a JS Object, and "null" is an object with no reference. Most importantly, the reason we will not set the initial state of this to an empty array like we did with the state above is, this will have an initial implicit value of "false", which will help with our conditional rendering. 
	const [selectedPage, setSelectedPage] = useState(null);


	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>

			{
				// We are checking to see if the value of the selectedPage state is "null" or references an article page
				selectedPage 
				// Is it true?
				?
				// If it's true then we will render the Page Details here
				// <h3>Testing... If you see this then a page has been selected.</h3>

				// What I would like to do is send the details of the page and selected page to load it's details here.
				<PageDetails page={selectedPage} pages={pages} setPages={setPages} setSelectedPage={setSelectedPage}/>
				:

				<PagesList pages={pages} setSelectedPage={setSelectedPage}/>
				// If it's false then we will render the List of available Pages here
			}
			
		</main>
	)
}