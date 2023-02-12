import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.SearchFormBtn}>
            <span className={css.btnLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
