import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <div className="h-96 relative">
      {/* Overlay */}
      <div aria-hidden="true"></div>
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-96 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/public/images/banner1.jpg')",
            }}
          >
            <div className="text-center text-white relative z-20">
              <h1 className="text-5xl font-bold mb-4">Welcome to VisaPortal</h1>
              <p className="text-xl">
                Your gateway to seamless visa applications.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-96 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/public/images/slider2.jpg')",
            }}
          >
            <div className="text-center text-white relative z-20">
              <h1 className="text-5xl font-bold mb-4">Explore All Visas</h1>
              <p className="text-xl">Find the perfect visa for your needs.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-96 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/public/images/slider3.jpg')",
            }}
          >
            <div className="text-center text-white relative z-20">
              <h1 className="text-5xl font-bold mb-4">
                Track Your Applications
              </h1>
              <p className="text-xl">
                Manage and track your visa applications with ease.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
