import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPowerOff   } from "react-icons/fa"; 

import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";



const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const  {logOut, user} = useContext(AuthContext);
 
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogOut = () => {
    logOut()
    .then(() => alert('user Logged out.'))
  }
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={user.photoURL}
          />
          <IoMdArrowDropdown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        
            <MenuItem
              onClick={handleLogOut}
              className={`flex items-center gap-2 rounded `}
            >
              <FaPowerOff/>
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                
              >
                Logout
              </Typography>
            </MenuItem>
         
      </MenuList>
    </Menu>
    );
};

export default ProfileMenu;