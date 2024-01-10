import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout/MainLayout'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import ManageTasks from '../Pages/DashboardPages/ManageTasks/ManageTasks'
import CreateTask from '../Pages/DashboardPages/CreateTask/CreateTask';
import TodoList from '../Pages/DashboardPages/TodoList/TodoList';
import OngoingTasks from '../Pages/DashboardPages/OngoingTasks/OngoingTasks';
import CompletedTasks from '../Pages/DashboardPages/CompletedTasks/CompletedTasks';
import PrivateRoute from '../Components/Shared/PrivateRoute/PrivateRoute';
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
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: '/dashboard/manageTasks',
                element: <ManageTasks/>,
            },
            {
                path: '/dashboard/createTask',
                element: <CreateTask/>,
            },
            {
                path: '/dashboard/todoTasks',
                element: <TodoList/>
            },
            {
                path: '/dashboard/ongoingTasks',
                element: <OngoingTasks/>,
            },
            {
                path: '/dashboard/completedTasks',
                element: <CompletedTasks/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registration/>,
        
    }
])

export default router;