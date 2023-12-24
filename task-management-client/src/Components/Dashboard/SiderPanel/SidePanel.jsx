import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button className="md:hidden" onClick={() => setOpen(true)}>
        SidePanel
      </Button>

      <div
        className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  transform ${
          open ? "translate-x-0" : "-translate-x-80 md:translate-x-0"
        } duration-1000 absolute top-0 md:static z-10  rounded-none bg-white`}
      >
        <IconButton
          variant="text"
          onClick={() => setOpen(false)}
          className="md:hidden"
        >
          <IoMdClose className="text-xl font-bold" />
        </IconButton>
        <div className="mb-2 p-4 relative flex-1">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List className="flex-1">
          {/* manage tasks */}
          <NavLink to={"/dashboard/manageTasks"}>
            <ListItem>
              <ListItemPrefix>
                <BsListTask />
              </ListItemPrefix>
              Manage Tasks
            </ListItem>
          </NavLink>
          {/* create tasks */}
          <NavLink to={"/dashboard/createTask"}>
            <ListItem>
              <ListItemPrefix>
                <TfiWrite />
              </ListItemPrefix>
              Create Task
            </ListItem>
          </NavLink>
          {/* todo list */}
          <NavLink to={"/dashboard/todoTasks"}>
            <ListItem>
              <ListItemPrefix>
                <RiCalendarTodoFill />
              </ListItemPrefix>
              TO-DO List
            </ListItem>
          </NavLink>
          {/* ongoing task */}
          <NavLink to={"/dashboard/ongoingTasks"}>
            <ListItem>
              <ListItemPrefix>
                <GrInProgress />
              </ListItemPrefix>
              Ongoing Tasks
            </ListItem>
          </NavLink>
          {/* completed task */}
          <NavLink to={"/dashboard/completedTasks"}>
            <ListItem>
              <ListItemPrefix>
                <CiCircleCheck />
              </ListItemPrefix>
              Completed Tasks
            </ListItem>
          </NavLink>
        </List>
      </div>
    </div>
  );
};

export default SidePanel;
