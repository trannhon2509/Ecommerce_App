import React, { useEffect, useRef } from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import {  Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Gallery() {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const swiper = swiperRef.current.swiper;
          swiper.pagination.renderBullet = function (index, className) {
            return '<i class="' + className + 'bi bi-arrow-down-circle"></i>';
          };
          swiper.pagination.update();
        }
      }, []);
  return (
    <div className='container'>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
          <SwiperSlide><img className='p-5' src='/img/1.png' alt=''/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Gallery