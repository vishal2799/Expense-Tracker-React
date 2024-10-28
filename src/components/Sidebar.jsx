/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Logo } from '../assets/images';
import { navLinks } from '../constants';

const Sidebar = ({ sidebarClose }) => {
  return (
    <div className='w-full h-full flex flex-col py-5 px-6'>
      <Link to={'/'} onClick={sidebarClose}>
        <img src={Logo} className='w-3/4 h-24' />
      </Link>
      {/* Sidebar Links */}
      <div className='flex-grow overflow-auto p-5'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            onClick={sidebarClose} // Close sidebar on link click
            className='flex justify-start items-center py-[10px] px-[14px] gap-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 text-sm font-medium'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
