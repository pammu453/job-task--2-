import type { NextPage } from "next";

export type AnalysisHeadersType = {
  className?: string;
  bookingsAnalysis?: string;
  vector?: string;
  polygon2?: string;
};

const AnalysisHeaders: NextPage<AnalysisHeadersType> = ({
  className = "",
  bookingsAnalysis,
  vector,
  polygon2,
}) => {
  return (
    <div
      className={`flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-4 pb-6 pr-4 pl-6 gap-6 max-w-full z-1 text-left text-xl text-primary-deepblue font-montserrat border border-solid border-lavender-200 ${className}`}
    >
      <div className="w-[300px] h-[400px] relative rounded-2xl bg-white box-border hidden max-w-full border border-solid border-lavender-200" />
      <div className="self-stretch flex flex-row items-start justify-start gap-4 flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[100px]">
          <h1 className="m-0 relative text-inherit leading-8 font-bold font-inherit mix-blend-normal z-2 text-lg">
            {bookingsAnalysis}
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start pt-2 pb-3 pr-2 pl-4 relative gap-2 z-2 text-center text-xs">
          <div className="h-full w-full absolute !m-0 top-0 right-0 bottom-0 left-0 rounded-full bg-gray-500 box-border border border-solid border-cornflowerblue-100" />
          <b className="relative leading-4 inline-block mix-blend-normal min-w-[50px] z-1">
            This Month
          </b>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-2 h-1 relative z-1"
              alt=""
              src={vector}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-4 max-w-full text-right text-xs text-gray-400 font-nunito">
        <div className="self-stretch flex flex-row items-end justify-start gap-4 max-w-full flex-wrap">
          <div className="flex flex-col items-end justify-start gap-8 opacity-70 z-2">
            <div className="relative inline-block min-w-[18px]">100</div>
            <div className="relative inline-block min-w-[12px]">80</div>
            <div className="relative inline-block min-w-[12px]">60</div>
            <div className="relative inline-block min-w-[12px]">40</div>
            <div className="relative inline-block min-w-[12px]">20</div>
            <div className="relative inline-block min-w-[6px]">0</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[200px] max-w-full text-left text-xs text-gray-300 font-montserrat">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="self-stretch h-0.5 relative box-border opacity-5 z-2 border-t border-solid border-text" />
              <div className="self-stretch h-[200px] relative">
                <div className="absolute top-0 left-0 w-full h-[200px]">
                  <div className="absolute top-[180px] left-0 box-border w-[300px] h-0.5 opacity-5 z-2 border-t border-solid border-text" />
                  <div className="absolute top-[120px] left-0 box-border w-[300px] h-0.5 opacity-5 z-2 border-t border-solid border-text" />
                  <div className="absolute top-[60px] left-0 box-border w-[300px] h-0.5 opacity-5 z-2 border-t border-solid border-text" />
                  <div className="absolute top-[30px] left-0 box-border w-[300px] h-0.5 opacity-5 z-2 border-t border-solid border-text" />
                  <img
                    className="absolute top-0 left-0 w-full h-full z-4"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <div className="absolute top-6 left-12 w-[200px] h-[100px] flex flex-row items-start justify-start py-4 px-4 box-border">
                    <img
                      className="h-full w-full absolute !m-0 top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full z-5"
                      alt=""
                      src="/elipes.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-1 px-2 pb-4 relative gap-2">
                      <div className="w-full !m-0 absolute h-full top-0 right-2 bottom-0 left-0 shadow-md bg-primary-skyblue flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border z-6">
                        <div className="h-8 flex-1 relative">
                          <div className="absolute top-0 left-0 rounded-md w-[50px] h-[30px]" />
                          <img
                            className="absolute top-8 left-8 rounded-sm w-2 h-1 z-1"
                            loading="lazy"
                            alt=""
                            src={polygon2}
                          />
                        </div>
                      </div>
                      <div className="relative leading-3 inline-block min-w-[50px] z-7">
                        Total Bookings
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-4 pl-4 text-base text-white">
                        <b className="relative leading-3 inline-block min-w-[30px] z-7">
                          220
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[3px] left-0.5 w-full h-full">
                  <div className="absolute top-[180px] left-[-0.5px] box-border w-[300px] h-0.5 opacity-5 z-2 border-t border-solid border-text" />
                  <img
                    className="absolute top-0 left-0 w-full h-full z-3"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="absolute top-[60px] left-[80px] w-px h-[120px] object-contain z-6"
                    loading="lazy"
                    alt=""
                    src="/line-52.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-1 box-border max-w-full text-left">
          <div className="flex flex-row items-start justify-start gap-4 opacity-70 max-w-full z-2 flex-wrap">
            <div className="relative inline-block min-w-[30px]">10am</div>
            <div className="relative inline-block min-w-[30px]">11am</div>
            <div className="relative inline-block min-w-[30px]">12am</div>
            <div className="relative inline-block min-w-[30px]">01am</div>
            <div className="relative inline-block min-w-[30px]">02am</div>
            <div className="relative inline-block min-w-[30px]">03am</div>
            <div className="relative inline-block min-w-[30px]">04am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHeaders;
