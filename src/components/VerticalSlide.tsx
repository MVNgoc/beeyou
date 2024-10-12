import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowDown, ArrowUp } from '../assets/icons/index';
import { Button } from './Button';

type verticleSlideProps = {
  verticleSlideData: any;
};

export const VerticalSlide = ({ verticleSlideData }: verticleSlideProps) => {
  return (
    <div className="relative">
      <div className="flex lg:flex-col gap-4 absolute bottom-[-57px] justify-center w-full lg:w-fit lg:bottom-auto lg:right-[31px] lg:top-[50%] z-[99]">
        <Button className="swiper-button-prev w-10 h-10 !rounded-[100%] !p-0 cursor-pointer">
          <ArrowUp className="-rotate-90 lg:rotate-0" />
        </Button>
        <Button className="swiper-button-next w-10 h-10 !rounded-[100%] !p-0 cursor-pointer">
          <ArrowDown className="-rotate-90 lg:rotate-0" />
        </Button>
      </div>
      {/* <div className="absolute top-0 h-[102px] md:h-[150px] w-full bg-Cultured z-50 bg-opacity-top-to-bottom"></div>
      <div className="absolute bottom-0 lg:bottom-0 h-[102px] md:h-[150px] w-full bg-Cultured bg-opacity-bottom-to-top z-50"></div> */}
      <Swiper
        loop={false}
        autoplay={false}
        speed={500}
        pagination={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        slidesPerView={3}
        breakpoints={{
          430: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 23.5
          }
        }}
        direction={'vertical'}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper verticalSwiper max-h-[362px] lg:max-h-[520.5px] lg:h-[520.5px] !pt-0"
      >
        {verticleSlideData.map((item: any) => (
          <SwiperSlide key={item?.id} className="w-full">
            <div className="w-full md:max-w-[462px] h-fit shadow-shadow_2">
              <img
                src={item.image}
                alt="cmt"
                width={462}
                className="w-full md:max-w-[462px] mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
