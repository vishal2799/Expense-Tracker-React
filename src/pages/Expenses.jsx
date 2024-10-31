import { Pencil, Trash } from 'lucide-react';
import {
  BudgetCard,
  CreateExpenseForm,
  DeleteBudget,
  DeleteExpense,
} from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { budgetData, expensesData } from '../constants';
import { useModal } from '../context/ModalContext';

const Expenses = () => {
  const navigate = useNavigate();
  const { budgetId } = useParams();
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const { openModal, closeModal } = useModal();

  const openDeleteExpenseModal = (expenseId) => {
    openModal(
      <DeleteExpense onDeleteExpense={() => deleteExpense(expenseId)} />,
      'Delete Expense'
    );
  };

  const openDeleteBudgetModal = (budgetId) => {
    openModal(
      <DeleteBudget onDeleteBudget={() => deleteBudget(budgetId)} />,
      'Delete Budget'
    );
  };

  useEffect(() => {
    // Find the specific budget based on budgetId
    const selectedBudget = budgetData.find(
      (budget) => budget.id === Number(budgetId)
    );

    // Filter the expenses related to the selected budget
    const relatedExpenses = expensesData.filter(
      (expense) => expense.budgetId === Number(budgetId)
    );

    // Set both the budget and the expenses in state
    setBudget(selectedBudget);
    if (relatedExpenses.length > 0) {
      setExpenses(relatedExpenses);
    }
  }, [budgetId]);

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const remainingAmount = budget ? budget.totalAmount - totalSpent : 0;
  const itemCount = expenses.length;

  const deleteExpense = (expenseId) => {
    // Remove the expense with the specified id
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updatedExpenses);
    closeModal();
  };

  const deleteBudget = (budgetId) => {
    console.log(budgetId);
    closeModal();
    setTimeout(() => {
      navigate('/budgets');
    }, 2500);
  };

  const handleAddExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: expenses.length + 1 + Math.random(), // Unique ID
      budgetId: Number(budgetId),
      amount: parseFloat(newExpenseData.amount),
      date: new Date().toISOString().split('T')[0], // Default to today's date
    };

    setExpenses([...expenses, newExpense]);
  };

  if (!budget) {
    return <p>Loading...</p>; // Display a loading state while data is being set
  }

  return (
    <div className='p-5 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-semibold text-black'>My Expenses</h2>
        <div className='flex gap-3'>
          <button className='flex gap-2 py-2 px-5 bg-blue-500 text-white rounded-md'>
            <Pencil width={16} />
            Edit
          </button>
          <button
            onClick={() => openDeleteBudgetModal(budget.id)}
            className='flex gap-2 py-2 px-5 bg-red-500 text-white rounded-md'
          >
            <Trash width={16} />
            Delete
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {/* Flex container for BudgetCard */}
          <div className='flex flex-col'>
            <BudgetCard
              budget={budget}
              itemCount={itemCount}
              spentAmount={totalSpent}
              remainingAmount={remainingAmount}
            />
          </div>

          {/* Flex container for CreateExpenseForm with border styling */}
          <div className='flex flex-col border border-gray-300 rounded-md shadow-sm p-6'>
            {remainingAmount === 0 ? (
              'No Remaining Amount'
            ) : (
              <CreateExpenseForm onAddExpense={handleAddExpense} />
            )}
          </div>
        </div>
        {expenses.length > 0 ? (
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
        ) : (
          'No Expenses'
        )}
      </div>
    </div>
  );
};

export default Expenses;
