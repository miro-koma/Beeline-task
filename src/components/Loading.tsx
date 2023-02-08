const Loading = ({ show }: { show: boolean }) => {
  return show ? (
    <div className="d-flex justify-content-center" data-testid="loading-spinner">
      <img src="/images/loading.gif" alt="loading" />
    </div>
  ) : null;
};

export default Loading;
