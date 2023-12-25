import { Spinner, Typography } from "@material-tailwind/react";
import useGetTasks from "../../../hooks/useGetTasks";
import TaskCard from "../../../Components/Shared/TaskCard/TaskCard";
import ShortCard from "../../../Components/Shared/ShortCard/ShortCard";

const ManageTasks = () => {
  const [todoList, todoLoading] = useGetTasks("todo");
  const [ongoingList, ongoingLoading] = useGetTasks("ongoing");
  const [completedList, completedLoading] = useGetTasks("ongoing");
  if (todoLoading || ongoingLoading || completedLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        <div className="rounded-xl shadow-2xl p-12">
          <div className="text-center mb-7">
            <Typography className="font-bold" variant="h2">
              TO-DO Tasks
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            {todoList.map((data) => (
              <ShortCard key={data._id} data={data} />
            ))}
          </div>
        </div>
        <div className="rounded-xl shadow-2xl p-12">
          <div className="text-center mb-7">
            <Typography className="font-bold" variant="h2">
              Ongoing Tasks
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            {ongoingList.map((data) => (
              <ShortCard key={data._id} data={data} />
            ))}
          </div>
        </div>
        <div className="rounded-xl shadow-2xl p-12">
          <div className="text-center mb-7">
            <Typography className="font-bold" variant="h2">
              Completed Tasks
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            {completedList.map((data) => (
              <ShortCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
