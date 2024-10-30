/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import { useModal } from '../context/ModalContext';

const DeleteExpense = ({ onDeleteExpense }) => {
  const notify = () =>
    toast.info('Expense Deleted', {
      pauseOnHover: false,
      autoClose: 2000,
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteExpense();
    notify();
  };
  const { closeModal } = useModal();
  return (
    <div>
      <h4 className='text-black mb-1'>Are you absolutely sure?</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        reiciendis! Nemo recusandae
      </p>
      <div className='flex justify-end gap-2 items-center mt-4'>
        <button
          onClick={() => closeModal()}
          className='rounded-md bg-transparent text-black py-2 px-4 border border-gray-300'
        >
          Close
        </button>
        <button
          onClick={handleSubmit}
          className='rounded-md bg-blue-500 text-white py-2 px-4 border-blue-400'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DeleteExpense;
