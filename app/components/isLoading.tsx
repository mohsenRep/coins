const IsLoading = () => {
  return (
    <div className="flex items-center p-16 justify-center space-x-2 rtl:space-x-reverse">
      <div
        className="inline-block   h-64 w-64 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="  !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
export default IsLoading;
