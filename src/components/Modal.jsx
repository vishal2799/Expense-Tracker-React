// Modal.js
import { useModal } from '../context/ModalContext';

const Modal = () => {
  const { isOpen, closeModal, modalContent, modalTitle } = useModal();

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative'>
        <h4 className='text-lg text-black font-semibold'>{modalTitle}</h4>
        <button
          className='text-gray-500 text-xl hover:text-gray-900 absolute right-4 top-2'
          onClick={closeModal}
        >
          &times;
        </button>
        <div className='mt-4'>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
