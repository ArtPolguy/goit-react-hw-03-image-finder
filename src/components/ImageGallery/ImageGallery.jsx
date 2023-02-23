import ImgGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, showModalImg }) => {
  const items = images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImgGalleryItem
      key={id}
      url={webformatURL}
      alt={tags}
      largeImageURL={largeImageURL}
      onClick={showModalImg}
    />
  ));
  return <ul className={css.imageGallery}>{items}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
