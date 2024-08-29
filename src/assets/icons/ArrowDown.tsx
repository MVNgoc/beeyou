import React from 'react';

type ArrowDownProps = {
  className?: string;
};

export const ArrowDown = ({ className }: ArrowDownProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <path
        d="M16.7076 7.40705L10.9836 13.131L5.25962 7.40705C5.00815 7.16417 4.67134 7.02978 4.32175 7.03282C3.97215 7.03586 3.63774 7.17608 3.39052 7.42329C3.14331 7.6705 3.00309 8.00492 3.00005 8.35452C2.99701 8.70411 3.13141 9.04091 3.37428 9.29238L10.0409 15.959C10.291 16.209 10.6301 16.3494 10.9836 16.3494C11.3372 16.3494 11.6762 16.209 11.9263 15.959L18.5929 9.29238C18.7203 9.16939 18.8219 9.02226 18.8918 8.85959C18.9616 8.69692 18.9984 8.52196 18.9999 8.34492C19.0015 8.16788 18.9678 7.99231 18.9007 7.82845C18.8337 7.66458 18.7347 7.51571 18.6095 7.39052C18.4843 7.26533 18.3354 7.16633 18.1716 7.09929C18.0077 7.03225 17.8321 6.99851 17.6551 7.00005C17.478 7.00159 17.3031 7.03837 17.1404 7.10825C16.9777 7.17813 16.8306 7.2797 16.7076 7.40705Z"
        fill="black"
      />
    </svg>
  );
};
