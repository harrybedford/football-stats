import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeagueTable } from './components/league-table/league-table';
import { Header } from './components/header/header';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <LeagueTable />
        </div>
      </div>
    );
  }
}
