import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Bloge from './component/Bloge/Bloge';
import Features from './component/Features/Features';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import Modules from './component/Modules/Modules';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element : <Home></Home>
        },
        {
          path: '/modules',
          element: <Modules></Modules>
        },
        {
          path: '/features',
          element : <Features></Features>
        },
        {
          path: '/blog',
          element : <Bloge></Bloge>
        }
      ]
    }

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
