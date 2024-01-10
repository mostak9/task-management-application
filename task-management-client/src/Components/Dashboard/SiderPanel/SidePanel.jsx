import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
  IconButton,
  Navbar,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import ProfileMenu from "../../Shared/Navigation/ProfileMenu";

const navStyle = ({ isActive, isTransitioning }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "black" : "",
    viewTransitionName: isTransitioning ? "slide" : "",
  };
};

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* mobile navbar */}
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 lg:hidden ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Button variant="text" size="sm" className="lg:hidden" onClick={() => setOpen(true)}>
            <IoMdMenu className="text-xl font-bold"/>
          </Button>
          <Link to={'/'}>
          <Typography
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
          >
            Task
            <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
              Forge
            </Typography>
          </Typography>
          </Link>
          <ProfileMenu/>
        </div>
      </Navbar>
      {/* side panel */}
      <div
        className={`h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  transform ${
          open ? "translate-x-0" : "-translate-x-80 lg:translate-x-0"
        } duration-1000 absolute top-0 lg:static z-10  rounded-none bg-white flex items-center flex-col gap-5`}
      >
        <IconButton
          variant="text"
          onClick={() => setOpen(false)}
          className="lg:hidden"
        >
          <IoMdClose className="text-xl font-bold" />
        </IconButton>
        <div className="mb-2 p-4  flex items-center">
          <Link to={'/'}>
          <Typography
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
          >
            Task
            <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
              Forge
            </Typography>
          </Typography>
          </Link>
        </div>
        <ProfileMenu/>
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
          <NavLink style={navStyle} to={"/dashboard/createTask"}>
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
