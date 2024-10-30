import { Trash } from 'lucide-react';
import { BudgetCard, CreateExpenseForm } from '../components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { budgetData, expensesData } from '../constants';

const Expenses = () => {
  const { budgetId } = useParams();
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

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
    setExpenses(relatedExpenses);
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
  };

  if (!budget) {
    return <p>Loading...</p>; // Display a loading state while data is being set
  }

  return (
    <div className='p-5 flex flex-col gap-6'>
      <h2 className='text-3xl font-semibold text-black'>My Expenses</h2>
      <div className='flex flex-col gap-8'>
        <div className='grid grid-cols-2 gap-5'>
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
            <CreateExpenseForm />
          </div>
        </div>
        <div className='text-black'>
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
                  onClick={() => deleteExpense(expense.id)}
                  width={24}
                  height={24}
                  className='text-red-500'
                />
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
