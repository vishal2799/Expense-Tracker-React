import { Pencil, Trash } from 'lucide-react';
import {
  BudgetCard,
  CreateBudgetForm,
  CreateExpenseForm,
  Delete,
  ExpensesList,
} from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { budgetData, expensesData } from '../constants';
import { useModal } from '../context/ModalContext';
import { toast } from 'react-toastify';

const Expenses = () => {
  const navigate = useNavigate();
  const { budgetId } = useParams();
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const { openModal, closeModal } = useModal();

  const openDeleteExpenseModal = (expenseId) => {
    openModal(
      <Delete onDelete={() => deleteExpense(expenseId)} />,
      'Delete Expense'
    );
  };

  const openDeleteBudgetModal = (budgetId) => {
    openModal(
      <Delete onDelete={() => deleteBudget(budgetId)} />,
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

  const notify = () =>
    toast.info('Expense Deleted', {
      pauseOnHover: false,
      autoClose: 2000,
    });

  const notify2 = () =>
    toast.info('Budget Deleted', {
      pauseOnHover: false,
      autoClose: 2000,
    });

  const deleteExpense = (expenseId) => {
    // Remove the expense with the specified id
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    notify();
    setExpenses(updatedExpenses);
    closeModal();
  };

  const deleteBudget = (budgetId) => {
    console.log(budgetId);
    notify2();
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

  const openEditBudgetModal = (budget) => {
    openModal(
      <CreateBudgetForm onAddBudget={onEditBudget} initialBudget={budget} />,
      'Edit Budget'
    );
  };

  const onEditBudget = (updatedBudgetData, emoji) => {
    const budgetToUpdate = budgetData.find(
      (budget) => budget.id === Number(budgetId)
    );

    if (budgetToUpdate) {
      console.log('found', budgetToUpdate);

      // Update the budget object with the new data
      const updatedBudget = {
        ...budgetToUpdate,
        category: updatedBudgetData.budgetName,
        totalAmount: parseFloat(updatedBudgetData.amount),
        emoji: emoji,
        date: new Date().toISOString().split('T')[0], // Use existing date or today's date
      };

      // Update the single budget
      setBudget(updatedBudget);

      console.log('Updated budget:', updatedBudget);
      closeModal(); // Close the modal after editing is complete
    } else {
      console.error('Budget not found');
    }
  };

  if (!budget) {
    return <p>Loading...</p>; // Display a loading state while data is being set
  }

  return (
    <div className='p-5 flex flex-col gap-6'>
      <div className='flex flex-col gap-3 md:flex-row md:justify-between md:items-center'>
        <h2 className='text-3xl font-semibold text-black'>My Expenses</h2>
        <div className='flex gap-3'>
          <button
            onClick={() => openEditBudgetModal(budget)}
            className='flex flex-1 md:flex-auto justify-center gap-2 py-2 px-5 bg-blue-500 text-white rounded-md'
          >
            <Pencil width={16} />
            Edit
          </button>
          <button
            onClick={() => openDeleteBudgetModal(budget.id)}
            className='flex flex-1 md:flex-auto justify-center gap-2 py-2 px-5 bg-red-500 text-white rounded-md'
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
          <ExpensesList
            expenses={expenses}
            openDeleteExpenseModal={openDeleteExpenseModal}
          />
        ) : (
          'No Expenses'
        )}
      </div>
    </div>
  );
};

export default Expenses;
