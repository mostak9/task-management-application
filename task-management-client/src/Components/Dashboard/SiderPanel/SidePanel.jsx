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
        <IconButton variant="text" onClick={() => setOpen(false)} className="md:hidden"><IoMdClose className="text-xl font-bold"/></IconButton>
        <div className="mb-2 p-4 relative flex-1">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List className="flex-1">
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Inbox
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default SidePanel;
