import React from 'react'
import Asset5Image from './asset5-image'
import SingleSidebar from './single-sidebar';

const Sidebar = () => {
    const menuItems = [
        { title: 'Dashboard', icon: '/dashboard.svg' },
        { title: 'Calendar', icon: '/frame.svg' },
        { title: 'Bookings', icon: '/frame-1.svg' },
        { title: 'Facilities', icon: '/frame-2.svg' },
        { title: 'Services', icon: '/frame-3.svg' },
        { title: 'Customers', icon: '/frame-4.svg' },
        { title: 'Staff', icon: '/frame-5.svg' },
        { title: 'Rooms', icon: '/frame-6.svg' },
        { title: 'Addons', icon: '/frame-7.svg' },
    ];
    return (
        <div>
            <div className="w-60 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border mq1125:hidden">
                <div className="self-stretch flex flex-col items-start justify-start gap-[46px]">
                    <Asset5Image />
                    <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-lg text-cornflowerblue-200 font-montserrat">
                        {
                            menuItems.map((item, index) => {
                                return <SingleSidebar item={item} key={index} />
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
