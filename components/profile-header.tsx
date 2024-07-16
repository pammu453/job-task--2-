import type { NextPage } from "next";
import CollapseLeftPannel from "./collapse-left-pannel";

export type ProfileHeaderType = {
  className?: string;
};

const ProfileHeader: NextPage<ProfileHeaderType> = ({ className = "" }) => {
  
  return (
    <span
      className={`self-stretch bg-white flex flex-row items-center justify-between py-[15px] px-[50px] relative gap-[20px] z-[1] mt-[-1001px] text-left text-13xl text-gray-100 font-montserrat mq800:flex-wrap mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit] mix-blend-normal mq800:text-7xl mq800:leading-[18px] mq450:text-lgi mq450:leading-[13px]">
        Dashboard
      </a>
      <div className="flex flex-row items-center justify-end gap-[20px] text-lg text-primary-deepblue">
        <div className="h-12 w-12 relative">
          <div className="absolute top-[0px] left-[0px] rounded-4xl bg-navy-300 w-full h-full" />
          <img
            className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden z-[1]"
            alt=""
            src="/frame-9.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="flex flex-row items-center justify-start relative gap-[10px] w-12 h-12">
            <div className="h-12 w-12 relative rounded-4xl bg-primary-deepblue" />
            <img
              className="h-[13.3px] w-6 absolute !m-[0] top-[calc(50%_-_6px)] left-[calc(50%_-_10px)] z-[1]"
              alt=""
              src="/jd.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start">
            <a className="[text-decoration:none] relative tracking-[-0.04em] leading-[22px] font-semibold text-[inherit] inline-block min-w-[84px]">
              John Doe
            </a>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/frame-10.svg"
            />
          </div>
        </div>
      </div>
      <CollapseLeftPannel />
    </span>
  );
};

export default ProfileHeader;
