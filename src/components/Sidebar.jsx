/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../assets/images';
import { navLinks } from '../constants';

const Sidebar = ({ sidebarClose }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'flex justify-start items-center p-4 gap-3 rounded-lg bg-blue-200 text-blue-700 text-base font-medium'
      : 'flex justify-start items-center p-4 gap-3 rounded-lg text-gray-600 group hover:bg-blue-200 hover:text-blue-700 text-base font-medium';

  return (
    <div className='w-full h-full flex flex-col py-5 px-6'>
      <Link to={'/'} onClick={sidebarClose}>
        <img src={Logo} className='w-52' />
      </Link>
      {/* Sidebar Links */}
      <div className='flex-grow overflow-auto py-5 flex flex-col gap-1'>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            onClick={sidebarClose} // Close sidebar on link click
            className={linkClass}
          >
            <link.icon className='text-base' />
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className='text-black text-sm font-medium'>Profile</div>
    </div>
  );
};

export default Sidebar;
