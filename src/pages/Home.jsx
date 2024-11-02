import { Receipt } from 'lucide-react';
import { useEffect, useState } from 'react';
import { budgetData, budgetData2, expensesData } from '../constants';
import { BudgetCard, DeleteExpense, ExpensesList } from '../components';
import { useModal } from '../context/ModalContext';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Home = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const { openModal, closeModal } = useModal();

  const openDeleteExpenseModal = (expenseId) => {
    openModal(
      <DeleteExpense onDeleteExpense={() => deleteExpense(expenseId)} />,
      'Delete Expense'
    );
  };

  useEffect(() => {
    setBudgets(budgetData);
    setExpenses(expensesData);
  }, []);

  const deleteExpense = (expenseId) => {
    // Remove the expense with the specified id
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updatedExpenses);
    closeModal();
  };

  const calculateSpentAmount = (budgetId) => {
    return expensesData
      .filter((expense) => expense.budgetId === budgetId)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateItemCount = (budgetId) => {
    return expensesData.filter((expense) => expense.budgetId === budgetId)
      .length;
  };
  return (
    <div className='p-5 flex flex-col gap-6'>
      <div>
        <h2 className='text-3xl font-semibold text-black'>Hi, Game Play</h2>
        <p>
          Here&apos;s what happening with your money. Lets manage your expense.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-3'>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className='flex flex-1 justify-between items-center border border-slate-200 rounded-md shadow-sm py-3 px-4'
          >
            <div className='flex flex-col'>
              <h5 className='font-medium text-xs text-black'>Total Budget</h5>
              <h3 className='font-semibold text-xl text-black'>$12500</h3>
            </div>
            <div className='bg-blue-600 rounded-full w-10 h-10 flex flex-col justify-center items-center'>
              <Receipt width={20} className='text-white' />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col md:flex-row md:justify-center gap-3'>
        <div className='flex flex-col gap-3 w-full md:w-3/5'>
          <div className='border rounded-md p-5'>
            <h2 className='font-bold text-lg text-black'>Activity</h2>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={budgetData2} margin={{ top: 7 }}>
                <XAxis dataKey='category' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='totalSpent' stackId='a' fill='#4845d2' />
                <Bar dataKey='totalAmount' stackId='a' fill='#C3C2FF' />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-black font-medium text-base'>
              Latest Expenses
            </h4>
            <div>
              <ExpensesList
                expenses={expenses}
                openDeleteExpenseModal={openDeleteExpenseModal}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full md:w-2/5'>
          <h4 className='text-black font-medium text-base'>Latest Budgets</h4>
          <div className='flex flex-col gap-3'>
            {budgets.map((budget, index) => {
              const spentAmount = calculateSpentAmount(budget.id);
              const remainingAmount = budget.totalAmount - spentAmount;
              const itemCount = calculateItemCount(budget.id);
              return (
                <BudgetCard
                  key={index}
                  budget={budget}
                  itemCount={itemCount}
                  spentAmount={spentAmount}
                  remainingAmount={remainingAmount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
