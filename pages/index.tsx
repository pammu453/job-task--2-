import type { NextPage } from "next";
import ProfileHeader from "../components/profile-header";
import AnalysisHeader from "../components/analysis-header";
import Navbar from '../components/navbar'
import Bookings from "../components/bookings";
import Sidebar from '../components/sidebar'

const Dashboard: NextPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite flex flex-row items-start justify-start pt-[30px] px-5 pb-[29px] box-border gap-[30px] leading-[normal] tracking-[normal]">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100% - 270px)]">
        <section className="self-stretch py-0 pr-0 pl-1 box-border max-w-full">
          <ProfileHeader className="mt-[30px] mb-[0px] rounded-tl-10xl rounded-tr-10xl" />
          <div className="rounded-bl-10xl rounded-br-10xl bg-white flex flex-row items-end justify-start pt-[10px] px-[46px] pb-[31px] box-border gap-[20px] max-w-full mq800:pt-[37px] mq800:box-border mq1125:pt-[57px] mq1125:pb-5 mq1125:box-border mq1325:flex-wrap mq1325:pl-[23px] mq1325:pr-[23px] mq1325:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] w-64 mq1125:min-w-full">
              <Navbar/>
              <AnalysisHeader />
            </div>
            <Bookings />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
