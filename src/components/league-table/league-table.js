import React, { Component } from 'react';
import './league-table.css';

const teams = [{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		},{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		},{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		},{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		},{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		},{
			name: 'Arsenal',
			played: 19,
			won: 19,
			drawn: 0,
			lost: 0,
			gd: 30,
			points: 50
		}];

export class LeagueTable extends Component {

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
					{ teams.map(team =>
						<tr>
							<td>
								{ team.name }
							</td>
							<td>
								{ team.played }
							</td>
							<td>
								{ team.won }
							</td>
							<td>
								{ team.drawn }
							</td>
							<td>
								{ team.lost }
							</td>
							<td>
								{ team.gd }
							</td>
							<td>
								{ team.points }
							</td>
						</tr>
					) }
				</tbody>
			</table>
		)
	}
}
