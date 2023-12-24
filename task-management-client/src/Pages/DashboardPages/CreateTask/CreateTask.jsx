import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const CreateTask = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-5xl md:w-2/3  mx-auto shadow-2xl p-12">
        <div className="text-center mb-4">
          <Typography variant="h3" className="font-bold">
            Add a Task
          </Typography>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex items-center flex-col gap-5"
          >
            <Input required {...register("title")} label="Title" />
            {/* <Select  {...register('priority')} label="Priority">
              <Option value="high">High</Option>
              <Option value="moderate">Moderate</Option>
              <Option value="low">Low</Option>
            </Select> */}
            <select {...register("priority")} className="w-full border-2 border-black/30 h-10 rounded-lg px-3">
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
            <Input
              required
              {...register("time")}
              type="time"
              label="Deadline Time"
            />
            <Input
              required
              {...register("date")}
              type="date"
              label="Deadline Date"
            />
            <Textarea
              required
              {...register("description")}
              label="Task Description"
            />
            <Button type="submit" className="w-2/3">
              Add Task
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
