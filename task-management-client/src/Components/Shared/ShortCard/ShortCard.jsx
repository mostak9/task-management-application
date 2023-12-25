import { Card, CardBody, Chip, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const ShortCard = ({ data }) => {
  return (
    <Card>
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
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <div className="flex items-center gap-3">
          {data.status === "todo" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="red" value="To-Do" />
          )}
          {data.status === "ongoing" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="amber" value="To-Do" />
          )}
          {data.status === "ongoing" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="green" value="To-Do" />
          )}
          {data.priority === "high" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="pink" value="High" />
          )}
          {data.priority === "moderate" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="blue" value="Moderate" />
          )}
          {data.priority === "low" && (
            <Chip variant="ghost" className="w-fit" size="sm" color="green" value="Low" />
          )}
          </div>
      </CardBody>
    </Card>
  );
};

ShortCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ShortCard;
