import { useState } from 'react';
import { CreateBudget } from '../components';
import BudgetCard from '../components/BudgetCard';

const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className='p-5 flex flex-col gap-6'>
        <h2 className='text-3xl font-semibold text-black'>My Budgets</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <CreateBudget onClick={toggleModal} />
          {[1, 2, 3, 4, 5].map((budget, index) => (
            <BudgetCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Budget;
