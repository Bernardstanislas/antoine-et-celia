const Home = () => {
  return (
    <div className="container mx-auto text-xl font-body">
      <div className="md:hidden">
        <div
          style={{ height: 623 }}
          className="bg-habilles-portrait bg-cover flex relative justify-center pt-12 font-title"
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
        <div className="p-6 space-y-4 bg-robe-green text-gray-800">
          <p>
            C’est avec beaucoup d’excitation que nous vous proposons de nous
            retrouver le 30 juillet 2022 pour célébrer notre mariage après neuf
            belles années de vie commune.
          </p>
          <p>
            Sans surprise, nous avons choisi la Bretagne pour partager avec vous
            ce moment, une région chère à nos cœurs.
          </p>
          <p>
            Nous avons hâte de vous y retrouver, et de vous en faire découvrir
            une petite partie pour ceux qui n’ont pas encore eu la chance d’y
            passer.
          </p>
        </div>
      </div>
      <div className="hidden md:flex h-screen justify-center items-center">
        <div className="text-center">
          J'ai pas fait le desktop frère, reviens me voir sur mobile 💌
        </div>
      </div>
    </div>
  );
};

export default Home;
