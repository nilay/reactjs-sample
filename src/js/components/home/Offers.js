import React from 'react';

export default class Offers extends React.Component{

	handleClick() {
		$('.pricing-table .listing').show()
  }


	render(){
		return (

			<section className="pricing-table-main">
				<div className="container-fluid max-width">
					<div className="row">
						<div className="col-md-3 col-sm-6 summer-saver price-bucket">
							<div className="pricing-table">
								<div className="text-center pricing-head">
									<h4 className="price-title">SUMMER SAVER</h4>
									<h2 className="pricing-quote">&euro;1595</h2>
									<small className="price-save">save &euro;300</small>
									<h5 className="price-date">Untill August 31.</h5>
								</div>
								<ul className="listing">
									<li><span>Cold-pressed poke thundercats brooklyn chillwave chartreuse</span></li>
									<li><span>Craft beer 3 wolf moon tbh hoodie</span></li>
									<li><span>Yolo synth hammock</span></li>
									<li><span>Distillery aesthetic VHS affogato gentrify bespoke</span></li>
									<li><span>Chia readymade schlitz brunch yuccie echo park</span></li>
								</ul>
								<div className="text-center price-actions">
									<a className="booknow-link" href="javascript:void(0);">BOOK NOW</a>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 expo-only most-popular  price-bucket">
							<div className="pricing-table">
								<div className="text-center pricing-head">
									<h4 className="price-title"><span className="most-populr-text">MOST POPULAR</span>EXPO ONLY</h4>
									<h2 className="pricing-quote">&euro;299</h2>
									<h5 className="price-date">Until October</h5>
								</div>
								<ul className="listing">
									<li><span>Cold-pressed poke thundercats brooklyn chillwave chartreuse</span></li>
									<li><span>Craft beer 3 wolf moon tbh hoodie</span></li>
									<li><span>Yolo synth hammock</span></li>
									<li><span>Distillery aesthetic VHS affogato gentrify bespoke</span></li>
									<li><span>Chia readymade schlitz brunch yuccie echo park</span></li>
								</ul>
								<div className="text-center price-actions">
									<a className="booknow-link" href="javascript:void(0);">BOOK NOW</a>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 public-govt-sector  price-bucket">
							<div className="pricing-table">
								<div className="text-center pricing-head">
									<h4 className="price-title">PUBLIC & GOVERNMENTAL SECTOR</h4>
									<h2 className="pricing-quote">&euro;1295</h2>
									<small className="price-save">Save &euro;300 from the Summer Saver</small>
									<h5 className="price-date">Until October</h5>
								</div>
								<ul className="listing">
									<li><span>Cold-pressed poke thundercats brooklyn chillwave chartreuse</span></li>
									<li><span>Craft beer 3 wolf moon tbh hoodie</span></li>
									<li><span>Yolo synth hammock</span></li>
									<li><span>Distillery aesthetic VHS affogato gentrify bespoke</span></li>
									<li><span>Chia readymade schlitz brunch yuccie echo park</span></li>
								</ul>
								<div className="text-center price-actions">
									<a className="booknow-link" href="javascript:void(0);">BOOK NOW</a>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 stnd-expo  price-bucket">
							<div className="pricing-table">
								<div className="text-center pricing-head">
									<h4 className="price-title">STANDARD CONFERENCE & EXPO</h4>
									<h2 className="pricing-quote">&euro;1695</h2>
									<div className="promo-code">
										<label className="promocode-text">Do you have a promo code?</label>
										<input className="promocode-textfield" type="text" name="" placeholder="Type it here & then pick DAY01/DAY02 OR BOTH"/>
									</div>
								</div>
								<ul className="listing">
									<li><span>Cold-pressed poke thundercats brooklyn chillwave chartreuse</span></li>
									<li><span>Craft beer 3 wolf moon tbh hoodie</span></li>
									<li><span>Yolo synth hammock</span></li>
									<li><span>Distillery aesthetic VHS affogato gentrify bespoke</span></li>
									<li><span>Chia readymade schlitz brunch yuccie echo park</span></li>
								</ul>
								<div className="text-center price-actions">
									<a className="booknow-link" href="javascript:void(0);">BOOK NOW</a>
								</div>
							</div>
						</div>
						<div className="col-sm-12 text-center pricing-click-link">
							<a className="btn btn-primary" href="javascript:void(0);" onClick={this.handleClick}>COMPARE BENEFITS</a>
						</div>
					</div>
				</div>
			</section>



		);
	}
}