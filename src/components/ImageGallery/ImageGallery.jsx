import ImgGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const items = images.map(img => (
    <ImgGalleryItem key={img.id} url={img.webformatURL} alt={img.tags} />
  ));
  return <ul className={css.imageGallery}>{items}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
