import React, { Component } from 'react';

import './Header.min.css'

class Header extends Component {
	render() {
		return (
				<header className="header">
					<div className="logo">
						<h1 className="h1">Happy Tour</h1>
					</div>
					<div className="pageTitle">
						<h1 className="h2">Intinerary</h1>
					</div>
				</header>
			);
	}
}

export default Header;