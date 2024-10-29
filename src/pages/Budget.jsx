import { Plus } from 'lucide-react';
import BudgetCard from '../components/BudgetCard';

const Budget = () => {
  return (
    <div className='p-5 flex flex-col gap-6'>
      <h2 className='text-3xl font-semibold text-black'>My Budgets</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='flex flex-col justify-center items-center p-5 bg-slate-100 border border-dashed rounded-md'>
          <button className='flex flex-col gap-2 items-center'>
            <Plus width={24} height={24} className='text-black' />
            <h4 className='text-base font-medium text-black'>
              Create New Budget
            </h4>
          </button>
        </div>
        {[1, 2, 3, 4, 5].map((budget, index) => (
          <BudgetCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Budget;
