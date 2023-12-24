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

const navStyle = ({ isActive, isTransitioning }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? 'black': '',
    viewTransitionName: isTransitioning ? "slide" : "",
  };
}

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
        <div className="mb-2 p-4  flex items-center">
        <Typography
              variant="h5"
              className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
            >
              Task
              <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
                Forge
              </Typography>
            </Typography>
        </div>
        <List className="">
          {/* manage tasks */}
          <NavLink style={navStyle} to={"/dashboard/manageTasks"}>
            <ListItem>
              <ListItemPrefix>
                <BsListTask />
              </ListItemPrefix>
              Manage Tasks
            </ListItem>
          </NavLink>
          {/* create tasks */}
          <NavLink  style={navStyle} to={"/dashboard/createTask"}>
            <ListItem>
              <ListItemPrefix>
                <TfiWrite />
              </ListItemPrefix>
              Create Task
            </ListItem>
          </NavLink>
          {/* todo list */}
          <NavLink style={navStyle} to={"/dashboard/todoTasks"}>
            <ListItem>
              <ListItemPrefix>
                <RiCalendarTodoFill />
              </ListItemPrefix>
              TO-DO List
            </ListItem>
          </NavLink>
          {/* ongoing task */}
          <NavLink style={navStyle} to={"/dashboard/ongoingTasks"}>
            <ListItem>
              <ListItemPrefix>
                <GrInProgress />
              </ListItemPrefix>
              Ongoing Tasks
            </ListItem>
          </NavLink>
          {/* completed task */}
          <NavLink style={navStyle} to={"/dashboard/completedTasks"}>
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
