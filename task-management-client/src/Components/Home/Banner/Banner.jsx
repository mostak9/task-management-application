import { Button } from "@material-tailwind/react";
import bg from "../../../assets/banner_bg.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-center min-h-[calc(100vh-57px)] bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-[calc(100vh-57px)] bg-white/70 flex items-center justify-center">
        <div className="text-center space-y-6">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Conquer To-Dos, Empower Your Day!",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Manage tasks, amplify efficiency.",
              1000,
              "Manage tasks hassle-free.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3em",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
          <p className="max-w-2xl text-gray-700 mx-auto text-xl ">
            Stay on top of tasks, prioritize work, and enhance team
            productivity. Customize workflows, set reminders, and never miss a
            deadline again
          </p>
          <Link className="" to={'/dashboard/manageTasks'}><Button className="mt-5" size="lg" variant="filled">Let's Explore</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
