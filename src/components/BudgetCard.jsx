import { ShoppingBag } from 'lucide-react';

const BudgetCard = () => {
  return (
    <div className='flex flex-col shadow-sm p-5 pb-7 border border-gray-300 rounded-md'>
      <div className='flex justify-between items-baseline mb-4'>
        <div className='flex gap-2'>
          <div className='flex flex-col justify-center items-center rounded-full bg-gray-300 p-3'>
            <ShoppingBag width={24} height={24} className='text-red-500' />
          </div>
          <div className='flex flex-col'>
            <h4 className='text-base font-medium text-black'>Shopping</h4>
            <h5 className='text-sm font-normal text-gray-500'>2 Item</h5>
          </div>
        </div>
        <h3 className='text-blue-600 text-lg font-semibold'>$1500</h3>
      </div>
      <div className='flex justify-between items-center mb-2'>
        <h5 className='text-gray-400 text-xs font-medium'>$150 Spend</h5>
        <h5 className='text-gray-400 text-xs font-medium'>$1200 Remaining</h5>
      </div>
      <div className='w-full h-1 bg-gray-300 rounded-sm'>
        <div className='w-2/4 h-full bg-blue-500'></div>
      </div>
    </div>
  );
};

export default BudgetCard;
