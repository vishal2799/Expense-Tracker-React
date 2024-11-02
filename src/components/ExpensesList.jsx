/* eslint-disable react/prop-types */
import { Trash } from 'lucide-react';

const ExpensesList = ({ expenses, openDeleteExpenseModal }) => {
  return (
    <div className='text-black overflow-auto'>
      <div className='grid grid-cols-4 bg-slate-200 p-2'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
      </div>
      {expenses.map((expense, index) => (
        <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
          <h2>{expense.expenseName}</h2>
          <h2>${expense.amount}</h2>
          <h2> {expense.date}</h2>
          <h2>
            <Trash
              onClick={() => openDeleteExpenseModal(expense.id)}
              width={24}
              height={24}
              className='text-red-500'
            />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
