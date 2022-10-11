import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Bloge from './component/Bloge/Bloge';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import Modules from './component/Modules/Modules';
import Quiz from './component/Quiz/Quiz';
import Statistik from './component/Statistik/Statistik';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Home></Home>
        },
        {
          path: '/modules',
          element: <Modules></Modules>
        },
        {
          path: '/statistik',
          element : <Statistik></Statistik>
        },
        {
          path: '/quiz/:ID',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.ID}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element : <Bloge></Bloge>
        }
        
      ],
      errorElement: <ErrorPage></ErrorPage>

    }


  ])
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
