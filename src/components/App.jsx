import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Component } from 'react';
import css from './App.module.css';
import { searchImg } from 'shared/api/img-api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImg();
    }
  }
  async fetchImg() {
    const { search, page } = this.state;
    try {
      this.setState({ loading: true });
      const data = await searchImg(search, page);
      const result = data.hits;
      this.setState(({ images }) => ({
        images: [...images, ...result],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImage = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { loading, images } = this.state;
    const { searchImage, loadMore } = this;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery images={images} />
        {loading && <p>...Loading images</p>}
        {Boolean(images.length) && <Button onClick={loadMore} />}
      </div>
    );
  }
}
