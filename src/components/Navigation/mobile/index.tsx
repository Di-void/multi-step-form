const MobileNavigation = () => {
  return (
    <section className="text-white font-bold w-2/3 lg:w-3/4 mx-auto flex justify-between xl:hidden">
      <div className="border-2 border-white text-black bg-light-blue rounded-full p-5 w-3 h-3 flex items-center justify-center">
        <span>1</span>
      </div>
      <div className="border-2 border-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
        <span>2</span>
      </div>
      <div className="border-2 border-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
        <span>3</span>
      </div>
      <div className="border-2 border-white rounded-full p-5 w-3 h-3 flex items-center justify-center">
        <span>4</span>
      </div>
    </section>
  );
};

export default MobileNavigation;
