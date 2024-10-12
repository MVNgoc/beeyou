import React from 'react';
import { BagIcon, BeeYouLogo, MoreIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center lg:!py-[17px] container bg-white !py-[13px] lg:bg-inherit">
        <div className="flex gap-[63px] items-center">
          <BeeYouLogo className="w-12 h-12 lg:w-auto lg:h-auto" />
          <div className="hidden lg:block">
            <ul className="navbar">
              <li>
                <p>Trang chủ</p>
              </li>
              <li>
                <p>Tote collection</p>
              </li>
              <li>
                <p>Về chúng tôi</p>
              </li>
              <li>
                <p>Liên hệ</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-Philippine_Yellow relative cursor-pointer">
            <BagIcon />
            <div className="w-5 h-5 rounded-full bg-Secondary flex justify-center items-center border-[2px] border-Cultured absolute top-[-5px] right-[-5px]">
              <p className="text-xs font-bold leading-[18px] text-white">2</p>
            </div>
          </div>
          <div
            className="block lg:hidden w-8 h-8 cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <MoreIcon />
          </div>
        </div>
      </div>
      <div
        className={`bg-modal fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className={`bg-white w-[70vw] py-4 fixed right-0 top-0 rounded-bl-md ${
            isOpen ? 'animation-slip' : ''
          }`}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <ul className="navbar">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/">Tote collection</Link>
            </li>
            <li>
              <Link to="/">Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
