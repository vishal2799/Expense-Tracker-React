import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts';
import { AllExpenses, Budget, ErrorPage, Expenses, Home } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/budgets',
        element: <Budget />,
      },
      {
        path: '/expenses/:budgetId',
        element: <Expenses />,
      },
      {
        path: '/expenses',
        element: <AllExpenses />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
