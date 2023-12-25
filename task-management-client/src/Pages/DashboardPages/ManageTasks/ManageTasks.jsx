import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Dialog,
  DialogFooter,
  DialogHeader,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useGetTasks from "../../../hooks/useGetTasks";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CiClock2, CiEdit } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useTaskDelete from "../../../hooks/useTaskDelete";

const ManageTasks = () => {
  const axiosPublic = useAxiosPublic();
  const [initialTodo, todoLoading, refetchTodo, successTodo] =
    useGetTasks("todo");
  const [initialOngoing, ongoingLoading, refetchOngoing, successOngoing] =
    useGetTasks("ongoing");
  const [
    initialCompleted,
    completedLoading,
    refetchCompleted,
    successCompleted,
  ] = useGetTasks("completed");

  const [todoList, updateTodoList] = useState(initialTodo);
  const [ongoingList, updateOngoingList] = useState(initialOngoing);
  const [completedList, updateCompletedList] = useState(initialCompleted);
  const [openTodo, setOpenTodo] = useState(false);
  const [openOngoing, setOpenOngoing] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const handleDeleteTask = useTaskDelete();

  const handleOpenTodo = () => setOpenTodo(!openTodo);
  const handleOpenOngoing = () => setOpenOngoing(!openOngoing);
  const handleOpenCompleted = () => setOpenCompleted(!openCompleted);

  if (successTodo && !todoList) {
    updateTodoList(initialTodo);
  }
  if (successOngoing && !ongoingList) {
    updateOngoingList(initialOngoing);
  }
  if (successCompleted && !completedList) {
    updateCompletedList(initialCompleted);
  }
  if (todoLoading || ongoingLoading || completedLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(todoList);
    const [reOrderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reOrderItem);
    updateTodoList(items);

    const modifiedStatus = result.destination.droppableId;
    if (
      !modifiedStatus ||
      result.source.droppableId === result.destination.droppableId
    )
      return;
    const res = await axiosPublic.patch(`/updateList/${result.draggableId}`, {
      status: modifiedStatus,
    });

    if (res.data.modifiedCount) {
      toast.success("Task updated!");
      refetchTodo();
      refetchOngoing();
      refetchCompleted();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <div className="rounded-xl shadow-2xl p-12">
            <div className="text-center mb-7">
              <Typography className="font-bold" variant="h2">
                TO-DO Tasks
              </Typography>
            </div>
            {/* todo list */}
            <Droppable droppableId="todo">
              {(provided) => (
                <div
                  className="grid grid-cols-1 gap-4 mt-8 bg-gray-200 p-5 rounded-lg"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {initialTodo?.map((data, idx) => (
                    <Draggable
                      key={data._id}
                      draggableId={data._id}
                      index={idx}
                    >
                      {(provided) => (
                        <Card
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardBody>
                            <div className="flex flex-col lg:flex-row items-center justify-between p-1">
                              <p className="flex items-center gap-1 text-xs">
                                <CiClock2 />
                                {data.time}
                              </p>
                              <p className="flex items-center gap-1 text-xs">
                                <SlCalender />
                                {data.date}
                              </p>
                            </div>
                            <Typography
                              variant="h5"
                              color="blue-gray"
                              className="mb-2"
                            >
                              {data.title}
                            </Typography>
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                              {data.status === "todo" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="red"
                                  value="To-Do"
                                />
                              )}
                              {data.status === "ongoing" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="amber"
                                  value="To-Do"
                                />
                              )}
                              {data.status === "ongoing" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="To-Do"
                                />
                              )}
                              {data.priority === "high" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="pink"
                                  value="High"
                                />
                              )}
                              {data.priority === "moderate" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="blue"
                                  value="Moderate"
                                />
                              )}
                              {data.priority === "low" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="Low"
                                />
                              )}
                            </div>
                          </CardBody>
                          <CardFooter className="pt-0 flex items-center justify-center gap-4">
                            <IconButton variant="text">
                              <CiEdit className="text-xl" />
                            </IconButton>
                            <IconButton
                              onClick={handleOpenTodo}
                              variant="text"
                              color="red"
                            >
                              <MdOutlineDeleteOutline className="text-xl" />
                            </IconButton>
                          </CardFooter>
                          <Dialog open={openTodo} handler={handleOpenTodo}>
                            <DialogHeader className="text-center mx-auto">
                              Are you sure?
                            </DialogHeader>
                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenTodo}
                                className="mr-1"
                              >
                                <span>Cancel</span>
                              </Button>
                              <Button
                                variant="gradient"
                                color="green"
                                onClick={() => {
                                  handleOpenTodo();
                                  handleDeleteTask(data._id);
                                }}
                              >
                                <span>Confirm</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="rounded-xl shadow-2xl p-12">
            <div className="text-center mb-7">
              <Typography className="font-bold" variant="h2">
                Ongoing Tasks
              </Typography>
            </div>
            {/* ongoing list */}
            <Droppable droppableId="ongoing">
              {(provided) => (
                <div
                  className="grid grid-cols-1 gap-4 mt-8 bg-gray-200 p-5 rounded-lg"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {initialOngoing?.map((data, idx) => (
                    <Draggable
                      key={data._id}
                      draggableId={data._id}
                      index={idx}
                    >
                      {(provided) => (
                        <Card
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardBody>
                            <div className="flex flex-col lg:flex-row items-center justify-between p-1">
                              <p className="flex items-center gap-1 text-xs">
                                <CiClock2 />
                                {data.time}
                              </p>
                              <p className="flex items-center gap-1 text-xs">
                                <SlCalender />
                                {data.date}
                              </p>
                            </div>
                            <Typography
                              variant="h5"
                              color="blue-gray"
                              className="mb-2"
                            >
                              {data.title}
                            </Typography>
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                              {data.status === "todo" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="red"
                                  value="To-Do"
                                />
                              )}
                              {data.status === "ongoing" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="amber"
                                  value="Ongoing"
                                />
                              )}
                              {data.status === "completed" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="Completed"
                                />
                              )}
                              {data.priority === "high" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="pink"
                                  value="High"
                                />
                              )}
                              {data.priority === "moderate" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="blue"
                                  value="Moderate"
                                />
                              )}
                              {data.priority === "low" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="Low"
                                />
                              )}
                            </div>
                          </CardBody>
                          <CardFooter className="pt-0 flex items-center justify-center gap-4">
                            <IconButton variant="text">
                              <CiEdit className="text-xl" />
                            </IconButton>
                            <IconButton
                              onClick={handleOpenOngoing}
                              variant="text"
                              color="red"
                            >
                              <MdOutlineDeleteOutline className="text-xl" />
                            </IconButton>
                          </CardFooter>
                          <Dialog open={openOngoing} handler={handleOpenOngoing}>
                            <DialogHeader className="text-center mx-auto">
                              Are you sure?
                            </DialogHeader>
                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenOngoing}
                                className="mr-1"
                              >
                                <span>Cancel</span>
                              </Button>
                              <Button
                                variant="gradient"
                                color="green"
                                onClick={() => {
                                  handleOpenOngoing();
                                  handleDeleteTask(data._id);
                                }}
                              >
                                <span>Confirm</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="rounded-xl shadow-2xl p-12">
            <div className="text-center mb-7">
              <Typography className="font-bold" variant="h2">
                Completed Tasks
              </Typography>
            </div>
            {/* completed list */}
            <Droppable droppableId="completed">
              {(provided) => (
                <div
                  className="grid grid-cols-1 gap-4 mt-8 bg-gray-200 p-5 rounded-lg"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {initialCompleted?.map((data, idx) => (
                    <Draggable
                      key={data._id}
                      draggableId={data._id}
                      index={idx}
                    >
                      {(provided) => (
                        <Card
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardBody>
                            <div className="flex items-center justify-between p-1">
                              <p className="flex flex-col lg:flex-row items-center gap-1 text-xs">
                                <CiClock2 />
                                {data.time}
                              </p>
                              <p className="flex items-center gap-1 text-xs">
                                <SlCalender />
                                {data.date}
                              </p>
                            </div>
                            <Typography
                              variant="h5"
                              color="blue-gray"
                              className="mb-2"
                            >
                              {data.title}
                            </Typography>
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                              {data.status === "todo" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="red"
                                  value="To-Do"
                                />
                              )}
                              {data.status === "ongoing" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="amber"
                                  value="Ongoing"
                                />
                              )}
                              {data.status === "completed" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="Completed"
                                />
                              )}
                              {data.priority === "high" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="pink"
                                  value="High"
                                />
                              )}
                              {data.priority === "moderate" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="blue"
                                  value="Moderate"
                                />
                              )}
                              {data.priority === "low" && (
                                <Chip
                                  variant="ghost"
                                  className="w-fit"
                                  size="sm"
                                  color="green"
                                  value="Low"
                                />
                              )}
                            </div>
                          </CardBody>
                          <CardFooter className="pt-0 flex items-center justify-center gap-4">
                            <IconButton variant="text">
                              <CiEdit className="text-xl" />
                            </IconButton>
                            <IconButton
                              onClick={handleOpenCompleted}
                              variant="text"
                              color="red"
                            >
                              <MdOutlineDeleteOutline className="text-xl" />
                            </IconButton>
                          </CardFooter>
                          <Dialog open={openCompleted} handler={handleOpenCompleted}>
                            <DialogHeader className="text-center mx-auto">
                              Are you sure?
                            </DialogHeader>
                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenCompleted}
                                className="mr-1"
                              >
                                <span>Cancel</span>
                              </Button>
                              <Button
                                variant="gradient"
                                color="green"
                                onClick={() => {
                                  handleOpenCompleted();
                                  handleDeleteTask(data._id);
                                }}
                              >
                                <span>Confirm</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default ManageTasks;
