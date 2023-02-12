import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <Searchbar />
      </div>
    );
  }
}
