const Home = () => {
  return (
    <div className="container mx-auto text-xl font-body">
      <div
        style={{ height: 623 }}
        className="bg-habilles-portrait bg-cover flex relative justify-center pt-12"
      >
        <div className="text-white text-center text-4xl drop-shadow-lg">
          <p>Antoine</p>
          <p>&</p>
          <p>Celia</p>
        </div>
        <div className="text-white text-center text-4xl absolute inset-x-0 bottom-0 mb-10 drop-shadow-lg">
          30 Juillet 2022
        </div>
      </div>
    </div>
  );
};

export default Home;
