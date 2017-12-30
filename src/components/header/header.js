import React, { Component } from 'react';
import logo from '../../logo.svg';
import './header.css';

export class Header extends Component {

	leagues = [
		'Premier League',
		'Bundersliga',
		'Ligue 1',
		'Serie A',
		'La Liga'
	];

	listLeagues = this.leagues.map((league) =>
		<li>
			{ league }
		</li>
	);

	render() {
		return (
			<header className="App-header">
				<h1 className="App-title">
					Football Stats
				</h1>
				<img src={ logo } className="App-logo" alt="logo" />
				<nav>
					<ul>
						{ this.listLeagues }
					</ul>
				</nav>
			</header>
		)
	};
}