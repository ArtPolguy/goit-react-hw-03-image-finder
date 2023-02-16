import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';
import { searchImg } from 'shared/api/img-api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  async searchImg({ search }) {
    this.setState({ search });
    const data = await searchImg(search);
    console.log(data);
  }

  render() {
    const { searchImg } = this;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={searchImg} />
      </div>
    );
  }
}
