const ModalImg = ({ largeImageURL, tags }) => {
  return (
    <>
      <img src={largeImageURL} alt={tags} />
    </>
  );
};

export default ModalImg;
