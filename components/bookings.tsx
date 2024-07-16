import React from 'react'

const Bookings = () => {
    return (
        <div className="z-10 w-[300px] rounded-2xl bg-lavender-100 box-border flex flex-col items-start justify-start pt-4 pb-4 pr-4 pl-4 gap-4 min-w-[300px] max-w-full z-1 text-center text-3xl text-primary-deepblue border-1 border-solid border-lavender-300 mq800:min-w-full mq1125:pt-3 mq1125:box-border mq1325:flex-1">
            <div className="w-[300px] h-[600px] relative rounded-2xl bg-lavender-100 box-border hidden max-w-full border-1 border-solid border-lavender-300" />
            <div className="flex flex-row items-start justify-start py-0 px-2.5 text-left">
                <h1 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit mix-blend-normal z-2 mq450:text-xl mq450:leading-[20px]">
                    Bookings
                </h1>
            </div>
            <div className="w-[250px] flex flex-row items-start justify-start py-0.5 px-1 box-border relative gap-6 max-w-full text-base mq800:flex-wrap mq450:gap-4">
                <div className="h-full w-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[30px] bg-gray-500 z-2" />
                <button className="cursor-pointer border-none py-3 px-6 bg-deepskyblue rounded-[80px] flex flex-row items-start justify-start z-3 hover:bg-steelblue">
                    <b className="relative text-base leading-3 inline-block font-montserrat text-white text-center mix-blend-normal min-w-[50px]">
                        Pending
                    </b>
                </button>
                <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                    <h2 className="m-0 relative text-inherit leading-3 font-normal font-inherit whitespace-pre-wrap inline-block mix-blend-normal min-w-[60px] z-3">
                        Today (16)
                    </h2>
                </div>
            </div>
            <div className="self-stretch h-[500px] flex flex-row items-start justify-start gap-4 max-w-full text-sm">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-[calc(100%_-_22px)]">
                    <div className="self-stretch flex-1 flex flex-col  justify-center gap-6">
                        <h6 className="m-0 relative text-inherit leading-3 font-normal font-inherit mix-blend-normal z-2">
                            You’ve 30 pending
                            <p>
                                booking.
                            </p>
                        </h6>
                        <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-2"
                            loading="lazy"
                            alt=""
                            src="/mask-group-1.svg"
                        />
                    </div>
                </div>
                <div className="h-[500px] w-1 relative rounded-2xl bg-snow z-2">
                    <div className="absolute top-0 left-0 rounded-2xl bg-snow w-full h-full hidden z-2" />
                    <div className="absolute top-0 left-0 rounded-2xl bg-primary-skyblue w-1 h-[150px] z-3" />
                </div>
            </div>
        </div>
    )
}

export default Bookings
