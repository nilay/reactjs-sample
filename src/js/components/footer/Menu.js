import React from 'react';

export default class Menu extends React.Component {
   render() {
      return (
					<div className="col-sm-12 footer-nav-links">
						<ul className="nav-inline nav nav-pills">
							<li><a href="#">HRN</a></li>
							<li><a href="#">ABOUT</a></li>
							<li><a href="#">TEAM</a></li>
							<li><a href="#">JOBS</a></li>
							<li><a href="#">CONTACT</a></li>
						</ul>
					</div>
       );
   }
}