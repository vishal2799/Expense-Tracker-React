/* eslint-disable react/prop-types */
import { Plus } from 'lucide-react';
import CreateBudgetForm from './CreateBudgetForm';
import { useModal } from '../context/ModalContext';

const CreateBudget = ({ onAddBudget }) => {
  const { openModal } = useModal();

  const openCreateBudgetModal = () => {
    openModal(
      <CreateBudgetForm onAddBudget={onAddBudget} />,
      'Create New Budget'
    );
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 bg-slate-100 border border-dashed rounded-md'>
        <button
          onClick={openCreateBudgetModal}
          className='flex flex-col gap-2 items-center'
        >
          <Plus width={24} height={24} className='text-black' />
          <h4 className='text-base font-medium text-black'>
            Create New Budget
          </h4>
        </button>
      </div>
    </>
  );
};

export default CreateBudget;
