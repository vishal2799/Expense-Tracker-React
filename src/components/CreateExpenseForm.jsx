import { useState } from 'react';

const CreateExpenseForm = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data up to the parent component
    //onSubmit({ budgetName, amount });
    console.log(expenseName, amount);
    setExpenseName(''); // Clear the form fields after submit
    setAmount('');
  };
  return (
    <div>
      <h4 className='text-lg text-black font-semibold mb-2'>Add New Expense</h4>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2 text-sm text-black font-medium'>
          Expense Name
          <input
            type='text'
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter Expense name'
          />
        </label>
        <label className='block mb-2 text-sm text-black font-medium'>
          Expense Amount
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter Expense amount'
          />
        </label>
        <button
          type='submit'
          disabled={!(expenseName, amount)}
          className='mt-4 bg-blue-500 w-full text-white py-2 px-4 rounded-md disabled:bg-blue-300'
        >
          Add New Expense
        </button>
      </form>
    </div>
  );
};

export default CreateExpenseForm;
