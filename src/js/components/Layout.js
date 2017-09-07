import React from 'react';

import Footer from "./Footer";
import Header from "./Header"
import Home from "./home/Home"

export default class Layout extends React.Component{
	render(){
		return (
			<div>
				<Header/>
				<Home/>
				<Footer/>
			</div>	
		);
	}
}
