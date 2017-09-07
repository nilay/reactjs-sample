import React from 'react';
import LandingText from './LandingText'
import Offers from './Offers'
import Partners from './Partners'

export default class Home extends React.Component {
   render() {
      return (

				<main className="site-content">
					<LandingText/>
					<Offers/>
					<Partners/>

				</main>

      );
   }
}