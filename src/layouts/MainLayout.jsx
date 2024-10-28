import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className='flex items-center justify-center h-dvh bg-white'>
      <div className='flex h-full w-full overflow-hidden relative'>
        <div
          className={`${
            isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full'
          } md:translate-x-0 transition-transform absolute w-full md:static top-0 left-0 z-50 md:w-2/5 lg:w-1/4 md:max-w-xs h-full bg-[#00000073] backdrop-blur-[50px] border-r border-black md:bg-[#0003] md:border-[#ffffff1a] md:flex flex-col justify-center items-center overflow-auto`}
        >
          <Sidebar sidebarClose={() => setIsSidebarOpen(false)} />
        </div>

        <div className='fixed md:hidden top-[52px] right-11 z-[101] h-10 w-10 p-[10px] rounded-xl border border-[#ffffff0d] backdrop-blur-2xl'>
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? 'X' : '|||'}
          </div>
        </div>
        <div className='w-full md:w-3/4 overflow-auto h-full'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
