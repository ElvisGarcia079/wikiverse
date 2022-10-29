import React from 'react';
import { Page } from './Page';

// Here we are going to include the setSelectedPage state
export const PagesList = ({pages, setSelectedPage}) => {
	return <>
		{
			pages.map((page, idx) => {
				// We are going to add the setSelectedPage as a prop to pass down to the page in order to use it to select the page
				return <Page page={page} key={idx} setSelectedPage={setSelectedPage} />
			})
		}
	</>
} 
