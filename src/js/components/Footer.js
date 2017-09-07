import React from 'react';
import Logo from './footer/Logo'
import Menu from './footer/Menu'
import Social from './footer/Social'
import Links from './footer/Links'

export default class Footer extends React.Component {
   render() {
      return (
				 
				<footer className="text-center site-footer">
						<div className="container-fluid">
							<div className="row">
								<Logo/>
								<Menu/>
								<Social/>
								<Links/>
							</div>
						</div>	
					</footer>
       );
   }
}