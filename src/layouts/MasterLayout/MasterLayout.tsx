import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.';
import Footer from '../Footer/Footer';
export interface MasterLayoutProps {
  type: string;
  isBack?: boolean;
}

const MasterLayout: React.FC<MasterLayoutProps> = () => {
  return (
    <div className="bg-Cultured">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MasterLayout;
