import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <div className="self-stretch h-[238px] relative max-w-full">
                <div className="absolute top-[25px] left-[0px] w-full flex flex-col items-start justify-start pt-[72px] pb-[33.9px] pr-5 pl-10 box-border gap-[9px] max-w-full">
                    <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-soft-light z-[2]"
                        alt=""
                        src="/mask-group@2x.png"
                    />
                    <h1 className="m-0 w-[467px] text-white font-bold max-w-[467px] relative text-inherit leading-[51px] inline-block mix-blend-normal z-[3] text-[45px]">
                        Welcome Back!
                    </h1>
                    <h2 className="m-0 text-white w-[428px] relative text-lg leading-[21px] font-normal font-inherit inline-block mix-blend-normal z-[3]">
                        Let's take a closer look at your stats and appointments
                    </h2>
                </div>
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                        className="absolute top-[25px] left-[0px] w-[993px] h-[212.9px] z-[1]"
                        alt=""
                        src="/rectangle-4472.svg"
                    />
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[448px] w-[364.9px] z-[3]">
                        <img
                            className="absolute top-[2.6px] left-[0px] rounded-4xl w-full h-full object-contain"
                            alt=""
                            src="/cutepetcollageisolated-1@2x.png"
                        />
                        <img
                            className="absolute  top-[0px] left-[93.4px] w-[38.6px] h-[26.7px] object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/vector-1.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
