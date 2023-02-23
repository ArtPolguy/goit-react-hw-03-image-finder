import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImgGalleryItem = ({ largeImageURL, onClick, url, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={url}
        alt={alt}
        onClick={() => onClick({ largeImageURL, alt })}
      />
    </li>
  );
};

export default ImgGalleryItem;

// imgGalleryItem.propTypes = {};
