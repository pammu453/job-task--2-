import type { NextPage } from "next";

export type CollapseLeftPannelType = {
  className?: string;
};

const CollapseLeftPannel: NextPage<CollapseLeftPannelType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-11 w-11 !m-[0] absolute top-[9px] left-[-14px] shadow-[0px_8px_10px_rgba(58,_58,_58,_0.1)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3px] z-[2] border-[0.5px] border-solid border-whitesmoke ${className}`}
    >
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-8.svg"
      />
    </div>
  );
};

export default CollapseLeftPannel;
