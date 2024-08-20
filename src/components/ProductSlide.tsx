import { Product } from '@src/types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
      <>
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={false}
          speed={500}
          pagination={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          slidesPerView={4}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((product: Product) => (
            <SwiperSlide key={product?.id}>
              <div className="p-6 content-box rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[237px] rounded-2xl"
                />
                <div className="mt-3 flex flex-col gap-1 text-base font-bold leading-6">
                  <h4>{product.name}</h4>
                  <p className="opacity-80 text-Secondary">
                    {product.price.toLocaleString('vi-VN')} đ
                  </p>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  {listColor.map(color => (
                    <div
                      className="shadow-md w-[13px] h-[13px] rounded-full"
                      style={{ backgroundColor: color.color }}
                      key={color.id}
                    ></div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </>
  );
};
