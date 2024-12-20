import { useEffect, useState } from 'react';
import { CreateBudget } from '../components';
import BudgetCard from '../components/BudgetCard';
import { budgetData, expensesData } from '../constants';
import { useModal } from '../context/ModalContext';

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const { closeModal } = useModal();
  useEffect(() => {
    setBudgets(budgetData);
  }, []);

  const calculateSpentAmount = (budgetId) => {
    return expensesData
      .filter((expense) => expense.budgetId === budgetId)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateItemCount = (budgetId) => {
    return expensesData.filter((expense) => expense.budgetId === budgetId)
      .length;
  };

  const handleAddBudget = (newBudgetData, emoji) => {
    const newBudget = {
      ...newBudgetData,
      id: budgets.length + 1 + Math.random(), // Unique ID
      emoji: emoji,
      category: newBudgetData.budgetName,
      totalAmount: parseFloat(newBudgetData.amount),
      date: new Date().toISOString().split('T')[0], // Default to today's date
    };

    setBudgets([...budgets, newBudget]);
    closeModal();
  };

  return (
    <>
      <div className='p-5 flex flex-col gap-6'>
        <h2 className='text-3xl font-semibold text-black'>My Budgets</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <CreateBudget onAddBudget={handleAddBudget} />
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
    </>
  );
};

export default Budget;
