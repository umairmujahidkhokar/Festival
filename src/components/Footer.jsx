import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="mt-10 px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-400 bg-[#261D20]">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/30 pb-10">
        {/* Brand Info */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-1">
            <h1 className="text-[#FEB800] font-normal text-3xl">UNI</h1>
            <p className="text-white font-normal text-3xl">FEST</p>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Links + Newsletter */}
        <div className="flex flex-col sm:flex-row flex-1 justify-between gap-10">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Subscribe to our newsletter</h2>
            <p className="text-sm">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4">
              <input
                className="border border-gray-500/30 bg-transparent placeholder-gray-500 focus:ring-2 ring-yellow-600 outline-none w-full sm:w-64 h-9 rounded px-3"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 w-full sm:w-24 h-9 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs text-white md:text-sm pb-6">
        UniFest 2024 © <a href="https://prebuiltui.com" className="underline hover:text-yellow-400">PrebuiltUI</a>. All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer;
