import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Bloge from './component/Bloge/Bloge';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import Modules from './component/Modules/Modules';
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
          path: '/blog',
          element : <Bloge></Bloge>
        }
      ]
    }

  ])
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
