import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Modal, Sidebar } from '../components';
import { ModalProvider } from '../context/ModalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <ModalProvider>
      <main className='flex items-center justify-center h-dvh bg-white'>
        <div className='flex h-full w-full overflow-hidden relative'>
          <div
            className={`${
              isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full'
            } md:translate-x-0 transition-transform absolute w-full md:static top-0 left-0 z-50 md:w-2/5 lg:w-1/5 md:max-w-xs h-full border-r border-gray-300 bg-white md:flex flex-col justify-center items-center overflow-auto`}
          >
            <Sidebar sidebarClose={() => setIsSidebarOpen(false)} />
          </div>

          <div className='fixed md:hidden top-6 right-6 z-[101] h-10 w-10 p-[10px] rounded-xl border border-gray-300 backdrop-blur-2xl items-center justify-center flex'>
            <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? 'X' : '|||'}
            </div>
          </div>
          <div className='w-full md:w-3/4 lg:w-4/5 overflow-auto h-full'>
            <Outlet />
          </div>
        </div>
      </main>
      <Modal />
      <ToastContainer />
    </ModalProvider>
  );
};

export default MainLayout;
