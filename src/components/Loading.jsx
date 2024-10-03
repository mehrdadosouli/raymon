const Loading = () => {
  return (
    <div className="size-full fixed top-0 left-0 z-50 flex flex-col justify-center items-center gap-5">
        <span className="animate__animated animate__flash animate__infinite circle-1"></span>
      <span className="text-xl ">
        در حال دریافت اطلاعات
      </span>
    </div>
  );
};

export default Loading;
