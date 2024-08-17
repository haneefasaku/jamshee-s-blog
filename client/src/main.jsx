import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import Root from './routes/Root';
import ErrorPage from './error-page';
import Home from './routes/Home';
import About from './routes/About';
import Dashbord from './routes/Dashbord';
import Projects from './routes/Projects';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import {store, persistor} from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/dashbord',
        element:<Dashbord/>,
      },
      {
        path:'/projects',
        element:<Projects/>,
      },
      {
        path:'/signin',
        element:<SignIn/>,
      },
      {
        path:'/signup',
        element:<SignUp/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
