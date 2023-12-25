import {
  Card,
  CardBody,
  Chip,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useGetTasks from "../../../hooks/useGetTasks";

import ShortCard from "../../../Components/Shared/ShortCard/ShortCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";

const ManageTasks = () => {
  const [initialTodo, todoLoading, refetchTodo , successTodo] = useGetTasks("todo");
  const [initialOngoing, ongoingLoading,refetchOngoing , successOngoing] = useGetTasks("ongoing");
  const [initialCompleted, completedLoading, refetchCompleted , successCompleted] = useGetTasks("completed");
  
  const [todoList, updateTodoList] = useState(initialTodo);
  const [ongoingList, updateOngoingList] = useState(initialOngoing);
  const [completedList, updateCompletedList] = useState(initialCompleted);

  console.log(successTodo);
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

  console.log(todoList);
  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(todoList);
    const [reOrderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reOrderItem);
    updateTodoList(items);
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
                  className="grid grid-cols-1 gap-4 mt-8"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {todoList?.map((data, idx) => (
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
                            <div className="flex items-center gap-3">
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
                  className="grid grid-cols-1 gap-4 mt-8"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {ongoingList?.map((data, idx) => (
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
                            <div className="flex items-center gap-3">
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
                  className="grid grid-cols-1 gap-4 mt-8"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {completedList?.map((data, idx) => (
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
                            <div className="flex items-center gap-3">
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
