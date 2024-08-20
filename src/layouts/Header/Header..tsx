import React from 'react';
import { BagIcon, BeeYouLogo } from '../../assets/icons';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-[17px] container">
      <div className="flex gap-[63px] items-center">
        <BeeYouLogo />
        <div>
          <ul className='navbar'>
            <li>Trang chủ</li>
            <li>Tote collection</li>
            <li>Về chúng tôi</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-Philippine_Yellow relative cursor-pointer">
        <BagIcon />
        <div className="w-5 h-5 rounded-full bg-Secondary flex justify-center items-center border-[2px] border-Cultured absolute top-[-5px] right-[-5px]">
          <p className="text-xs font-bold leading-[18px] text-white">2</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
