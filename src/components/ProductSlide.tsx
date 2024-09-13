import { Product } from '@src/types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from './Button';

type ProductSlideProps = {
  data: Product[];
};

const listColor = [
  {
    id: 1,
    color: '#EF9CD6'
  },
  {
    id: 2,
    color: '#85CEF2'
  },
  {
    id: 3,
    color: '#F4EA88'
  },
  {
    id: 4,
    color: '#FFFFFF'
  }
];

export const ProductSlide = ({ data }: ProductSlideProps) => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={false}
        speed={500}
        pagination={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          320: {
            spaceBetween: 8
          },
          1024: {
            spaceBetween: 30
          }
        }}
        slidesPerView={'auto'}
        modules={[Autoplay, Navigation]}
        className="mySwiper productSlide"
      >
        {data.map((product: Product) => (
          <SwiperSlide
            key={product?.id}
            className="max-w-[152px] lg:max-w-[285px] lg:!w-[285px]"
          >
            <div className="relative slide-container">
              <div className="p-1 lg:p-6 content-box rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[144px] rounded-lg lg:h-[237px] lg:rounded-2xl"
                />
                <div className='px-2 lg:px-0'>
                  <div className="mt-[9px] lg:px-0 lg:mt-3 flex flex-col gap-2 lg:gap-1 text-base font-bold leading-6">
                    <h4>{product.name}</h4>
                    <p className="opacity-80 text-Secondary">
                      {product.price.toLocaleString('vi-VN')} đ
                    </p>
                  </div>
                  <div className="mt-2 mb-4 lg:px-0 lg:mb-0 flex gap-2 items-center">
                    {listColor.map(color => (
                      <div
                        className="shadow-md w-[16px] h-[16px] rounded-full"
                        style={{ backgroundColor: color.color }}
                        key={color.id}
                      ></div>
                    ))}
                  </div>
                  <Button className="mt-6 mb-2 lg:mb-0 lg:mt-4 w-full buy-now-button">
                    <p className="text-base font-bold leading-6">Mua ngay</p>
                  </Button>
                </div>
              </div>
              <div className="hidden content-box-background absolute -top-3 -right-5 -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="242"
                  height="453"
                  viewBox="0 0 242 453"
                  fill="none"
                >
                  <path
                    opacity="0.04"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 268.205V252.757L241.318 13.7761C241.897 17.5491 241.985 22.3351 241.998 28.5516L0 268.205ZM0 291.377V275.929L242 36.2731V51.7214L0 291.377ZM0 314.55V299.102L242 59.4457V74.894L0 314.55ZM0 337.722V322.274L242 82.6181V98.0663L0 337.722ZM0 360.894V345.446L242 105.79V121.238L0 360.894ZM0 384.067V368.619L242 128.963V144.411L0 384.067ZM0 407.239L0 391.791L242 152.135V167.583L0 407.239ZM0.058809 430.353C9.42802e-10 427.604 0 424.505 0 421V414.963L242 175.307V190.756L0.058809 430.353ZM5.00842 448.624C4.89955 448.523 4.79219 448.42 4.68629 448.314C2.18645 445.814 1.02012 442.501 0.475948 437.665L242 198.48V213.928L5.00842 448.624ZM24.0234 452.966C17.8842 452.877 13.3891 452.563 9.95958 451.445L242 221.652V237.1L24.0234 452.966ZM47.3877 453H32C31.9293 453 31.8587 453 31.7883 453L242 244.825V260.273L47.3877 453ZM70.7867 453H55.1874L242 267.997V283.445L70.7867 453ZM94.1855 453H78.5861L242 291.169V306.617L94.1855 453ZM117.585 453H101.986L242 314.342V329.79L117.585 453ZM140.984 453H125.384L242 337.514V352.962L140.984 453ZM164.382 453H148.783L242 360.686V376.134L164.382 453ZM187.782 453H172.182L242 383.859V399.307L187.782 453ZM211.181 453C210.793 453 210.399 453 210 453H195.582L242 407.031V421C242 421.502 242 421.995 242 422.48L211.181 453ZM241.943 430.26C241.753 439.4 240.923 444.704 237.314 448.314C233.674 451.953 228.313 452.766 219.034 452.948L241.943 430.26ZM239.559 7.79469L0 245.033V229.585L230.658 1.16093C233.432 1.84848 235.571 2.94321 237.314 4.68629C238.229 5.60178 238.966 6.62627 239.559 7.79469ZM208.431 0H210C215.538 0 220.059 -3.82103e-09 223.796 0.23187L0 221.86V206.412L208.431 0ZM185.032 0H200.631L0 198.688V183.24L185.032 0ZM161.633 0H177.232L0 175.516V160.067L161.633 0ZM138.234 0H153.833L0 152.343V136.895L138.234 0ZM114.835 0H130.434L0 129.171V113.722L114.835 0ZM91.4353 0H107.035L0 105.998V90.5497L91.4353 0ZM68.0368 0H83.6362L0 82.826V67.3778L68.0368 0ZM44.6378 0H60.2372L0 59.6537V44.2054L44.6378 0ZM21.1395 0.0983795C24.2513 -2.57391e-09 27.8386 0 32 0H36.8382L0 36.4813V32C0 27.7445 -2.70156e-09 24.0891 0.105213 20.9289L21.1395 0.0983795ZM0.925971 12.3917L12.532 0.898079C9.16739 1.55771 6.67075 2.70183 4.68629 4.68629C2.72951 6.64307 1.5898 9.09783 0.925971 12.3917Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
