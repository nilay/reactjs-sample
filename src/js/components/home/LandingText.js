import React from 'react';

export default class LandingText extends React.Component{
	render(){
		return (
			<section className="text-center links-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 middle-links">
							<ul className="navbar nav-pills nav-inline">
								<li><a href="#">Early bird<span className="badge soldout-text">SOLD OUT</span></a></li>
								<li className="active summr-saverlink"><a href="#">SUMMER SAVER<span className="date-time">UNTILL<span className="date-status">AUG.31</span></span>
								</a></li>
								<li><a href="#">REGULAR</a></li>
								<li><a href="#">LATE</a></li>
								<li><a href="#">ONSITE REGISTRATION</a></li>
							</ul>
						</div>

						<div className="container paragraph-text">
							<div className="row">
								<div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
									<p>Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial. Dreatmcatcher
										live-edge lo-fi, chartreuse echo park pinterest distillery glossier plaid fingerstache. Fashion axe keytar truffaut
										migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica </p>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
		);
	}
}