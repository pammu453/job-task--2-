import React, { FC } from 'react'

type MenuItem = {
    item: {
        title: string;
        icon: string;
    }
}

const SingleSidebar: FC<MenuItem> = ({ item }) => {
    return (
        <div className={`self-stretch rounded-3xs flex ${item.title === "Dashboard" ? "bg-primary-deepblue" : ""} flex-row items-start justify-start p-[5px] gap-[9px]`}>
            <div className="h-11 w-11 rounded-md bg-navy-200 flex flex-row items-center justify-center">
                <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={item.icon}
                />
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] font-normal font-inherit inline-block min-w-[83px]">
                    {item.title}
                </h2>
            </div>
        </div>
    )
}

export default SingleSidebar
