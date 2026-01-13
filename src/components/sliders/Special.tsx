import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const SpecialSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: '.custom_prev',
          nextEl: '.custom_next',
        }}
        className="custom-class"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>

      <div className="custom-nav">
        <button type="button" className="custom_prev">
          Prev
        </button>
        <button type="button" className="custom_next">
          Next
        </button>
      </div>
    </>
  );
};

export default SpecialSlider;
