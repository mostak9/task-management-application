import { Button, Input, Typography } from "@material-tailwind/react";
import registerAnimation from "../../assets/login.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-7xl h-2/3 m-auto shadow-2xl p-6 rounded-xl flex flex-col md:flex-row-reverse items-center gap-5">
        <div className="w-1/2 flex items-center flex-col justify-center">
          <Typography
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
          >
            Task
            <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
              Forge
            </Typography>
          </Typography>
          <Lottie className="h-2/3" animationData={registerAnimation} />
          <Typography variant="h2" className="font-bold">
            Registration
          </Typography>
        </div>
        {/* registration form */}
        <div className="flex items-center justify-center flex-1 flex-col gap-2">
          <form action="" className="w-full space-y-5">
          <Input label="Full Name" type="text" />
          <Input label="Profile Picture" type="file"/>
            <Input label="Email" type="email" />
            
            <div className="relative">
              <Input label="Password" type={showPass ? "text" : "password"} />
              <div
                className="absolute right-1 top-1/3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <Button className="w-full">Register</Button>
          </form>
          <p>
            Already have an account?
            <Link to={'/login'} className="text-blue-900 underline">Login</Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Registration;
