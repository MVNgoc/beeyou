import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white mt-12 md:mt-[76px]">
      <div className="lg:flex justify-between !pt-[33px] !pb-[31px] lg:!pb-[33px] container">
        <div className="text-sm font-normal leading-6 flex gap-12 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <Link to={'/'}>Sản phẩm hot</Link>
            <Link to={'/'}>Sản phẩm bán chạy</Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <Link to={'/'}>Hot deal tháng 12</Link>
            <Link to={'/'}>Anotner links</Link>
          </div>
        </div>
        <div className="flex gap-[41px] mt-6 lg:mt-0 lg:gap-3 items-center">
          <p className="text-xs font-normal leading-[18px]">
            © 2020 beebag.com.vn
          </p>
          <div className="flex gap-2 items-center">
            <Link to={'/'}>
              <FacebookIcon />
            </Link>
            <Link to={'/'}>
              <InstagramIcon />
            </Link>
            <Link to={'/'} className="ml-2">
              <YoutubeIcon />
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
