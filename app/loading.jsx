import PuffLoader from "react-spinners/PuffLoader"

const Loading = () => {
  return (
    <div className="loading_icon">
      <PuffLoader
        color="#916aad"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading