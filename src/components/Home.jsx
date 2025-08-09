import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relative h-[620px] w-full -z-1 flex flex-col">
    
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/rave2.jpeg')] bg-cover bg-center opacity-130 blur-none"></div>

        {/* Black Overlay (gradient or solid) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>


        <div className="absolute flex flex-col z-10  justify-left h-full  px-15 py-4 pt-10 mt-20">
            
            <h1 className="text-white text-5xl font-bold ">Diverse <span className="text-amber-300 leading-20">NightLife Dance</span><br/> Solution Available
            </h1>
            
            <p className=" text-amber-50 pr-125 pt-5 my-4 text-2xl ">Unifest is a dynamic celebration of Black American culture where music, art, 
            fashion, food, and heritage unite. Join us for an unforgettable experience of
            rhythm, connection, and empowerment as we honor the past, 
            embrace the present, and ignite the future.
            </p>
            
            <div className="flex flex-row my-4">
                <button className="cursor-pointer bg-[linear-gradient(to_right,_#390D39,_#8A3E8A)]  text-amber-50       border-2 rounded-2xl px-10 py-3 pr-15 text-xl font-bold">
                    Book Event
                </button>
                <img className=" cursor-pointer h-7 w-7 mt-4 -ml-14" src="/images/arrow-right.png" alt="arrow-right button" />
            </div>

        </div>
      
    </div>
  );
};

export default Home;
