import React from 'react';
import Bar from './header/Bar'
import Nav from './header/Nav'

export default class Header extends React.Component {
   render() {
      return (

			<header className='site-header'>
				<Bar/>
				<Nav/>
			</header>

      );
   }
}