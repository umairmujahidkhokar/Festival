import React, { useEffect, useState } from 'react';

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-15T10:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full'> {/* Removed height constraints completely */}
      {/* Countdown Section */}
      <section className="w-full bg-[#03011B] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="text-[#f9b300]">Event</span>{" "}
              Begins On:
            </h2>
          </div>

          {/* Countdown */}
          <div className="flex gap-4 text-center text-white">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="w-20">
                <div className="text-3xl font-extrabold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm tracking-wide text-[#f9b300] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <div className='w-full bg-[#ffffff] py-8'> {/* Removed height constraints */}
        <div className='max-w-6xl mx-auto px-4 space-y-8'> {/* Proper container with standard spacing */}
          
          {/* Event 1 */}
          <div className='flex flex-col lg:flex-row gap-6 p-6 bg-[#4A224A] rounded-lg shadow-sm'>
            <div className='flex-shrink-0'>
              <img 
                className="w-70 h-70 object-cover rounded-2xl" 
                src='/images/img1.png'
                alt="Event 1"
              />
            </div>
            <div className='flex-1 space-y-4'>
              <h1 className='text-2xl lg:text-4xl font-bold text-white'>
                Hosted Dinner With Chef Monica Geller Festival 2024/25
              </h1>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                <span className='font-semibold text-lg text-white'>28 Feb 2024</span>
                <span className='font-semibold text-lg text-white'>2:00pm - 24:00pm</span>
                <span className='font-semibold text-lg text-white'>Royal Ln. Mesa, New Jersey 45463</span>
              </div>
              <p className='text-lg text-white leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae saepe delectus dolorem quibusdam itaque minus labore nulla veniam.
              </p>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <button className='bg-amber-300 hover:bg-amber-400 font-semibold text-lg rounded-xl px-6 py-3 cursor-pointer transition-colors'>
                  Book Event
                </button>
                <h5 className='font-bold text-2xl text-white'>99$</h5>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className='flex flex-col lg:flex-row gap-6 p-6 bg-[#4A224A] rounded-lg shadow-sm'>
            <div className='flex-shrink-0'>
              <img 
                className="w-70 h-70 object-cover rounded-2xl" 
                src='/images/img2.png'
                alt="Event 2"
              />
            </div>
            <div className='flex-1 space-y-4'>
              <h1 className='text-2xl lg:text-4xl font-bold text-white'>
                Hosted Dinner With Chef Monica Geller Festival 2024/25
              </h1>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                <span className='font-semibold text-lg text-white'>28 Feb 2024</span>
                <span className='font-semibold text-lg text-white'>2:00pm - 24:00pm</span>
                <span className='font-semibold text-lg text-white'>Royal Ln. Mesa, New Jersey 45463</span>
              </div>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae saepe delectus dolorem quibusdam itaque minus labore nulla veniam.
              </p>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <button className='bg-amber-300 hover:bg-amber-400 font-semibold text-lg rounded-xl px-6 py-3 cursor-pointer transition-colors'>
                  Book Event
                </button>
                <h5 className='font-bold text-2xl text-white'>99$</h5>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className='flex flex-col lg:flex-row gap-6 p-6 bg-[#4A224A] rounded-lg shadow-sm'>
            <div className='flex-shrink-0'>
              <img 
                className="w-70 h-70 object-cover rounded-2xl" 
                src='/images/img1.png'
                alt="Event 3"
              />
            </div>
            <div className='flex-1 space-y-4'>
              <h1 className='text-2xl lg:text-4xl font-bold text-white'>
                Hosted Dinner With Chef Monica Geller Festival 2024/25
              </h1>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                <span className='font-semibold text-lg text-white'>28 Feb 2024</span>
                <span className='font-semibold text-lg text-white'>2:00pm - 24:00pm</span>
                <span className='font-semibold text-lg text-white'>Royal Ln. Mesa, New Jersey 45463</span>
              </div>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae saepe delectus dolorem quibusdam itaque minus labore nulla veniam.
              </p>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <button className='bg-amber-300 hover:bg-amber-400 font-semibold text-lg rounded-xl px-6 py-3 cursor-pointer transition-colors'>
                  Book Event
                </button>
                <h5 className='font-bold text-2xl text-white'>99$</h5>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className='flex flex-col lg:flex-row gap-6 p-6 bg-[#4A224A] rounded-lg shadow-sm'>
            <div className='flex-shrink-0'>
              <img 
                className="w-70 h-70 object-cover rounded-2xl" 
                src='/images/img2.png'
                alt="Event 4"
              />
            </div>
            <div className='flex-1 space-y-4'>
              <h1 className='text-2xl lg:text-4xl font-bold text-white'>
                Hosted Dinner With Chef Monica Geller Festival 2024/25
              </h1>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                <span className='font-semibold text-lg text-white'>28 Feb 2024</span>
                <span className='font-semibold text-lg text-white'>2:00pm - 24:00pm</span>
                <span className='font-semibold text-lg text-white'>Royal Ln. Mesa, New Jersey 45463</span>
              </div>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae saepe delectus dolorem quibusdam itaque minus labore nulla veniam.
              </p>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <button className='bg-amber-300 hover:bg-amber-400 font-semibold text-lg rounded-xl px-6 py-3 cursor-pointer transition-colors'>
                  Book Event
                </button>
                <h5 className='font-bold text-2xl text-white'>99$</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Events;