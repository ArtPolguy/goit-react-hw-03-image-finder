import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  searchImg = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { searchImg } = this;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={searchImg} />
      </div>
    );
  }
}
