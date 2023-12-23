import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout/MainLayout'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import Dashboard from '../Layouts/Dashboard/Dashboard';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registration/>
    }
])

export default router;