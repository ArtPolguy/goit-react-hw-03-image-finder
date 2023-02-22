import ImgGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const items = images.map(({ id, webformatURL, tags }) => (
    <ImgGalleryItem key={id} url={webformatURL} alt={tags} />
  ));
  return <ul className={css.imageGallery}>{items}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
