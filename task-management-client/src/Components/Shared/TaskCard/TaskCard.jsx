import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { CiClock2, CiEdit } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskCard = ({ data }) => {
  return (
    <Card className="">
      <CardHeader className="flex items-center justify-between p-1 -mb-2">
        <p className="flex items-center gap-1 text-xs">
          <CiClock2 />
          {data.time}
        </p>
        <p className="flex items-center gap-1 text-xs">
          <SlCalender />
          {data.date}
        </p>
      </CardHeader>

      <CardBody className="relative">
        <div className="mb-6">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.title}
          </Typography>
          {data.status === "todo" && (
            <Chip className="w-fit" size="sm" color="red" value="To-Do" />
          )}
          {data.status === "ongoing" && (
            <Chip className="w-fit" size="sm" color="amber" value="To-Do" />
          )}
          {data.status === "ongoing" && (
            <Chip className="w-fit" size="sm" color="green" value="To-Do" />
          )}
        </div>
        <Typography>{data.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center gap-4">
        <IconButton variant="text">
          <CiEdit className="text-xl" />
        </IconButton>
        <IconButton variant="text" color="red">
          <MdOutlineDeleteOutline className="text-xl" />
        </IconButton>
      </CardFooter>
    </Card>
  );
};

TaskCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TaskCard;
