import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const partners = [
  '/images/gallery/feris.jpg',
  '/images/gallery/feris2.jpg',
  '/images/gallery/party2.jpg',
  '/images/gallery/party3.jpg',
  '/images/gallery/rave3.jpg',
  '/images/gallery/roller2.jpg',
  '/images/img1.png',
  '/images/img2.png',
];

export default function TrustedPartnersCarousel() {
  return (
    <div className="flex flex-col items-center max-w-screen px-4 mt-10 mx-10">
      <div className="w-full max-w-7xl bg-[#4A224A] rounded-lg shadow-2xl px-6 py-10">
        <h1 className="text-5xl text-amber-300 font-semibold text-center mb-3">
          Gallery
        </h1>
        <p className="text-2xl text-white font-semibold text-center">
          Let's Show You A Mere Glimpse Of What We Offer          
        </p>
        {/* <Swiper
          className='-mt-5'
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },       // 1 slide on small devices
            768: { slidesPerView: 3 },     // 2 slides on tablets and up
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        > */}
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={3}
            slidesPerView={3}
            loop={true}
            speed={5000} // Controls how fast it scrolls
            autoplay={{
              delay: 0, // No delay between transitions
              disableOnInteraction: false,
            }}
            allowTouchMove={false} // Optional: disables manual swiping
          >
          {partners.map((logo, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center min-h-[300px] min-w-[300px]"
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="pt-5 h-[450px] w-[450px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
