
import useAxiosPublic from "./useAxiosPublic";
import useGetTasks from './useGetTasks'
import toast from 'react-hot-toast';
const useTaskDelete = () => {
  const axiosPublic = useAxiosPublic();
  const [,,refetchTodo] = useGetTasks('todo');
  const [,,refetchOngoing] = useGetTasks('ongoing');
  const [,,refetchCompleted] = useGetTasks('completed');
 
  const handleDeleteTask = async (id) => {
   
   const res = await axiosPublic.delete(`/deleteTask/${id}`)
   console.log(res.data);
   if(res.data.deletedCount) {
    refetchTodo();
    refetchOngoing();
    refetchCompleted();
    toast.success('Task deleted successfully!');
   } else {
    toast.error('Something went wrong!');
   }
  };

  return handleDeleteTask;
};

export default useTaskDelete;
