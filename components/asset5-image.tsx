import type { NextPage } from "next";

export type Asset5ImageType = {
  className?: string;
};

const Asset5Image: NextPage<Asset5ImageType> = ({ className = "" }) => {
  return (
    <img
      className={`w-[212px] h-[60px] relative overflow-hidden shrink-0 object-contain ${className}`}
      loading="lazy"
      alt=""
      src="/asset-5@2x.png"
    />
  );
};

export default Asset5Image;
