import { LayoutGrid, PiggyBank, ReceiptText } from 'lucide-react';

export const navLinks = [
  { id: 1, label: 'Dashboard', url: '/', icon: LayoutGrid },
  { id: 2, label: 'Budgets', url: '/budgets', icon: PiggyBank },
  { id: 3, label: 'Expenses', url: '/expenses', icon: ReceiptText },
];

export const budgetData = [
  {
    id: 1,
    category: 'Shopping',
    emoji: '🛍️',
    itemCount: 5,
    totalAmount: 2000,
  },
  {
    id: 2,
    category: 'Groceries',
    emoji: '🍎',
    itemCount: 10,
    totalAmount: 500,
  },
  {
    id: 3,
    category: 'Rent',
    emoji: '🏠',
    itemCount: 1,
    totalAmount: 1000,
  },
  {
    id: 4,
    category: 'Dining Out',
    emoji: '🍽️',
    itemCount: 3,
    totalAmount: 300,
  },
  {
    id: 5,
    category: 'Entertainment',
    emoji: '🎬',
    itemCount: 4,
    totalAmount: 600,
  },
  {
    id: 6,
    category: 'Utilities',
    emoji: '💡',
    itemCount: 2,
    totalAmount: 300,
  },
];

export const expensesData = [
  {
    id: 1,
    budgetId: 1, // Shopping
    expenseName: 'Clothes',
    amount: 100,
    date: '2024-10-01',
  },
  {
    id: 2,
    budgetId: 1, // Shopping
    expenseName: 'Shoes',
    amount: 50,
    date: '2024-10-05',
  },
  {
    id: 3,
    budgetId: 2, // Groceries
    expenseName: 'Vegetables',
    amount: 40,
    date: '2024-10-02',
  },
  {
    id: 4,
    budgetId: 2, // Groceries
    expenseName: 'Fruits',
    amount: 60,
    date: '2024-10-03',
  },
  {
    id: 5,
    budgetId: 3, // Rent
    expenseName: 'Monthly Rent',
    amount: 1000,
    date: '2024-10-01',
  },
  {
    id: 6,
    budgetId: 4, // Dining Out
    expenseName: 'Dinner',
    amount: 50,
    date: '2024-10-04',
  },
  {
    id: 7,
    budgetId: 4, // Dining Out
    expenseName: 'Lunch',
    amount: 30,
    date: '2024-10-05',
  },
  {
    id: 8,
    budgetId: 5, // Entertainment
    expenseName: 'Movies',
    amount: 25,
    date: '2024-10-06',
  },
  {
    id: 9,
    budgetId: 5, // Entertainment
    expenseName: 'Concert',
    amount: 225,
    date: '2024-10-07',
  },
  {
    id: 10,
    budgetId: 6, // Utilities
    expenseName: 'Electricity Bill',
    amount: 100,
    date: '2024-10-03',
  },
  {
    id: 11,
    budgetId: 6, // Utilities
    expenseName: 'Water Bill',
    amount: 50,
    date: '2024-10-04',
  },
];

export const budgetData2 = [
  {
    id: 1,
    category: 'Shopping',
    emoji: '🛍️',
    itemCount: 5,
    totalAmount: 2000,
    totalSpent: 1500, // Example value
  },
  {
    id: 2,
    category: 'Groceries',
    emoji: '🍎',
    itemCount: 10,
    totalAmount: 500,
    totalSpent: 400, // Example value
  },
  {
    id: 3,
    category: 'Rent',
    emoji: '🏠',
    itemCount: 1,
    totalAmount: 1000,
    totalSpent: 1000, // Example value
  },
  {
    id: 4,
    category: 'Dining',
    emoji: '🍽️',
    itemCount: 3,
    totalAmount: 300,
    totalSpent: 250, // Example value
  },
  {
    id: 5,
    category: 'Entertainment',
    emoji: '🎬',
    itemCount: 4,
    totalAmount: 600,
    totalSpent: 500, // Example value
  },
  {
    id: 6,
    category: 'Utilities',
    emoji: '💡',
    itemCount: 2,
    totalAmount: 300,
    totalSpent: 250, // Example value
  },
];
