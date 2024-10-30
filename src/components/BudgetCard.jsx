/* eslint-disable react/prop-types */
const BudgetCard = ({ budget, itemCount, spentAmount, remainingAmount }) => {
  const progress = (spentAmount / budget.totalAmount) * 100;
  return (
    <div className='flex flex-col shadow-sm p-6 pb-8 border border-gray-300 rounded-md'>
      <div className='flex justify-between items-baseline mb-4'>
        <div className='flex gap-2'>
          <div className='flex flex-col justify-center items-center rounded-full bg-slate-200 h-10 w-10 text-lg'>
            {budget?.emoji}
          </div>
          <div className='flex flex-col'>
            <h4 className='text-base font-medium text-black'>
              {budget?.category}
            </h4>
            <h5 className='text-sm font-normal text-gray-500'>
              {itemCount} Item
            </h5>
          </div>
        </div>
        <h3 className='text-blue-600 text-lg font-semibold'>
          ${budget?.totalAmount}
        </h3>
      </div>
      <div className='flex justify-between items-center mb-3'>
        <h5 className='text-gray-400 text-xs font-medium'>
          ${spentAmount} Spend
        </h5>
        <h5 className='text-gray-400 text-xs font-medium'>
          ${remainingAmount} Remaining
        </h5>
      </div>
      <div className='w-full h-1 bg-gray-300 rounded-sm'>
        <div
          className='h-full bg-blue-500'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BudgetCard;
