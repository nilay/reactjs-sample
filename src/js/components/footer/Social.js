import React from 'react';

export default class Social extends React.Component {
   render() {
      return (
					<div className="col-sm-12 footer-sociallinks">
						<ul className="nav-inline nav nav-pills">
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-slideshare" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
						</ul>
					</div>
       );
   }
}