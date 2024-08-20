import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[90px] container">
      <div className="text-sm font-normal leading-6 flex gap-10">
        <div className="flex gap-10">
          <Link to={'/'}>Sản phẩm hot</Link>
          <Link to={'/'}>Sản phẩm bán chạy</Link>
        </div>
        <div className="flex gap-10">
          <Link to={'/'}>Hot deal tháng 12</Link>
          <Link to={'/'}>Anotner links</Link>
        </div>
      </div>
      <div className="flex gap-3 items-center">
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
  );
};

export default Footer;
