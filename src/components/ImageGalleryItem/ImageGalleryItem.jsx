import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImgGalleryItem = ({ alt, url }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={url} alt={alt} />
    </li>
  );
};

export default ImgGalleryItem;

// imgGalleryItem.propTypes = {};
