import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const imgGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default imgGalleryItem;

imgGalleryItem.propTypes = {};
