import React, { Component } from 'react';
import axios from 'axios';
import './league-table.css';

export class LeagueTable extends Component {

	constructor() {
		super();
		this.state = {
			teams: []
		}
	}

	getData() {
		axios({
			method: 'GET',
			url: 'http://api.football-data.org/v1/competitions/398/leagueTable?season=2018',
			headers: {
				"X-Auth-Token": '2698794f3ede4d0c9b448822a55978c0'
			}
		})
		.then(data => {
			this.setState({ teams: data.data.standing });
		})
		.catch(err => {
			console.log(err);
		});
	}

	getTeams() {
		return this.state.teams.map(team => {
			return(<tr>
				<td>
					{ team.teamName }
				</td>
				<td>
					{ team.playedGames }
				</td>
				<td>
					{ team.wins }
				</td>
				<td>
					{ team.draws }
				</td>
				<td>
					{ team.losses }
				</td>
				<td>
					{ team.goalDifference }
				</td>
				<td>
					{ team.points }
				</td>
			</tr>)
		});
	}

	componentWillMount() {
		this.getData();
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>
						</td>
						<td>
							Pld
						</td>
						<td>
							Won
						</td>
						<td>
							Drawn
						</td>
						<td>
							Lost
						</td>
						<td>
							GD
						</td>
						<td>
							Pts
						</td>
					</tr>
				</thead>
				<tbody>
					{ this.getTeams() }
				</tbody>
			</table>
		)
	}
}
