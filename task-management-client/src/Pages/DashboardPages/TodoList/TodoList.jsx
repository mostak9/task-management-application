import { Spinner, Typography } from '@material-tailwind/react';
import useGetTasks from '../../../hooks/useGetTasks';
import TaskCard from '../../../Components/Shared/TaskCard/TaskCard';
const TodoList = () => {
    const [todoList, todoLoading] = useGetTasks('todo');
    if(todoLoading) return <div className="flex items-center justify-center min-h-screen"><Spinner /></div>
    console.log(todoList)
    return (
       <div className='flex items-center justify-center min-h-screen'>
         <div className='max-w-5xl mx-auto  m-auto shadow-2xl rounded-xl p-12'>
            <div className='text-center mb-7'>
                <Typography className='font-bold' variant='h2'>
                    TO-DO Tasks 
                </Typography>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                {
                    todoList.map(data => <TaskCard key={data._id} data={data}/>)
                }
            </div>
        </div>
       </div>
    );
};

export default TodoList;