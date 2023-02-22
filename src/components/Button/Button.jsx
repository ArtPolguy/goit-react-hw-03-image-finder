import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btnLoadMore} type="button">
      Load more
    </button>
  );
};

export default Button;
