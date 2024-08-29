import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} flex justify-center items-center py-2 px-6 rounded-xl bg-Philippine_Yellow hover:bg-Sunglow`}
    >
      {children}
    </button>
  );
};
