const Navbar  = () => {
    return(
        <div className="flex w-full justify-between items-center bg-transparent -mb-20 z-10">
            <h1 className="text-amber-300 font-bold text-4xl px-15 py-4 cursor-pointer">UNIFEST</h1>
            <nav>
                <ul className="gap-12 flex flex-row text-amber-50 text-2xl font-semibold cursor-pointer">
                    <li className="hover:text-amber-300 transition-colors duration-300">Home</li>
                    <li className="hover:text-amber-300 transition-colors duration-300">About</li>
                    <li className="hover:text-amber-300 transition-colors duration-300">Events</li>
                    <li className="hover:text-amber-300 transition-colors duration-300">Contact</li>                                        
                </ul>
            </nav>
           <div className="flex items-center border-2 rounded-4xl px-4 mx-8 text-amber-50 cursor-pointer">
                <input className="flex-grow outline-none h-8 cursor-pointer" type = "text" value="Search Events"/>
                <img className="h-5 w-5 ml-2 cursor-pointer" src="/images/search.png" alt="" />
           </div>
        </div>
    );
}

export default Navbar;