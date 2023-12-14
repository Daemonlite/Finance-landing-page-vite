import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold ">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus,
            aut assumenda, odit magnam iure excepturi quisquam exercitationem,
            temporibus laboriosam nihil. Numquam ipsam quibusdam fugit, optio
            porro corrupti fuga repellat.
          </p>
          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
