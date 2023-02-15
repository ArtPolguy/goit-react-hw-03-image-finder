import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleSubmit = e => {
    e.preventdefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormBtn}>
            <span className={css.btnLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.search}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
