import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";


const CreateTask = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-5xl md:w-2/3  mx-auto shadow-2xl p-12">
        <div className="text-center mb-4">
          <Typography variant="h3" className="font-bold">
            Add a Task
          </Typography>
        </div>
        <div>
          <form className=" flex items-center flex-col gap-5">
            <Input label="Title" />
            <Select label="Priority">
              <Option>High</Option>
              <Option>Moderate</Option>
              <Option>Low</Option>
            </Select>
            <Input type="time" label="Deadline Time" />
            <Input type="date" label="Deadline Date" />
            <Textarea label="Task Description" />
            <Button className="w-2/3">Add Task</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
