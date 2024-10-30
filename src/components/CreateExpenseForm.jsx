/* eslint-disable react/prop-types */
import { useState } from 'react';

const CreateExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({ expenseName: '', amount: '' });

  // Update formData state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('Updated FormData:', { ...formData, [name]: value }); // Log state on each change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ expenseName: '', amount: '' });
  };

  return (
    <div>
      <h4 className='text-lg text-black font-semibold mb-2'>Add New Expense</h4>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2 text-sm text-black font-medium'>
          Expense Name
          <input
            type='text'
            name='expenseName'
            value={formData.expenseName}
            onChange={handleInputChange}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter Expense name'
          />
        </label>
        <label className='block mb-2 text-sm text-black font-medium'>
          Expense Amount
          <input
            type='number'
            name='amount'
            value={formData.amount}
            onChange={handleInputChange}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter Expense amount'
          />
        </label>
        <button
          type='submit'
          disabled={!(formData.expenseName, formData.amount)}
          className='mt-4 bg-blue-500 w-full text-white py-2 px-4 rounded-md disabled:bg-blue-300'
        >
          Add New Expense
        </button>
      </form>
    </div>
  );
};

export default CreateExpenseForm;
