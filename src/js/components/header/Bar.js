import React from 'react';

export default class Bar extends React.Component {
   render() {
      return (
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
								 aria-expanded="false">
									<span className="sr-only">Menu</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#"><img src="images/header-logo.jpg" alt="logo"/></a>
							</div>
							<div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false">
							</div>
						</div>
					</nav>
      );
   }
}      	
